# Contact

<div class="row mt-1">

    <div class="col-lg-4">

        <div class="info">
            <div class="address">
                <i class="bx bx-map"></i>
                <h4>Location:</h4>
                <p>England, United Kingdom</p>
            </div>

            <div class="email">
                <i class="bx bx-envelope"></i>
                <h4>Email:</h4>
                <p>ricardompgoncalves@gmail.com</p>
            </div>

            <!--
            <div class="phone">
                <i class="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
            </div>
            -->

        </div>

    </div>

    <div class="col-lg-8 mt-5 mt-lg-0">

        <form id="contact-form" class="php-email-form" action="https://formspree.io/f/meqygqyp" method="post" role="form">
            <div class="row">
                <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
            </div>
            <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>

    </div>

</div>
