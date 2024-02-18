const fs = require('fs');
const handlebars = require("handlebars");
const Markdown = require("pagedown");
Markdown.Extra = require("./Markdown.Extra").Extra;

const homepageSections = [
    // "about",
    // "facts",
    // "skills",
    // "portfolio",
    "projects",
    // "services",
    "resume",
    // "publications",
    "awards-publications",
    // "testimonials",
    "contribute",
    "contact",
];

const templateFile = fs.readFileSync("template.hbs").toString();
const template = handlebars.compile(templateFile);

const converter = new Markdown.Converter();
Markdown.Extra.init(converter, {
    extensions: ["fenced_code_gfm", "tables", "def_list", "attr_list", "footnotes", "smartypants", "newlines", "strikethrough"],
    table_class: "table table-striped",
});

if (!fs.existsSync("_site/"))
    fs.mkdirSync("_site/");

// Build homepage
const sections = homepageSections.map(section => ({
    name: section,
    data: converter.makeHtml(fs.readFileSync(`template-sections/${section}/${section}.md`).toString()),
}));
fs.writeFileSync("_site/index.html", template({ sections, isHomepage: true }));

// Build other pages
const pages = fs.readdirSync("template-sections/").filter(f => fs.statSync("template-sections/"+f).isDirectory());
pages.forEach(page => {
    const sections = [{
        name: page,
        data: converter.makeHtml(fs.readFileSync(`template-sections/${page}/${page}.md`).toString()),
    }];
    
    if (!fs.existsSync(`_site/${page}/`))
        fs.mkdirSync(`_site/${page}/`);
    
    fs.cpSync(`template-sections/${page}/`, `_site/${page}/`, {recursive: true});
    fs.writeFileSync(`_site/${page}/index.html`, template({ sections, isHomepage: false }));
});
