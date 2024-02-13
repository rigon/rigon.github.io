const fs = require('fs');
const handlebars = require("handlebars");
const Markdown = require("pagedown");

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

if (!fs.existsSync("build/"))
    fs.mkdirSync("build/");

// Build homepage
const sections = homepageSections.map(section => ({
    name: section,
    data: converter.makeHtml(fs.readFileSync(`template-sections/${section}/${section}.md`).toString()),
}));
fs.writeFileSync("build/index.html", template({ sections, isHomepage: true }));

// Build other pages
const pages = fs.readdirSync("template-sections/").filter(f => fs.statSync("template-sections/"+f).isDirectory());
pages.forEach(page => {
    const sections = [{
        name: page,
        data: converter.makeHtml(fs.readFileSync(`template-sections/${page}/${page}.md`).toString()),
    }];
    
    if (!fs.existsSync(`build/${page}/`))
        fs.mkdirSync(`build/${page}/`);

    fs.writeFileSync(`build/${page}/index.html`, template({ sections, isHomepage: false }));
});
