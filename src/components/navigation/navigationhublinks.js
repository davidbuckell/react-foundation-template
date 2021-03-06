import React from "react";

function NavigationHubLinks() {
    return (
        <React.Fragment>
            <section>
                <header className="major">
                    <h2>Ante interdum</h2>
                </header>
                <div className="mini-posts">
                    <article>
                        <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                </div>
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </section>

            <section>
                <header className="major">
                    <h2>Get in touch</h2>
                </header>
                <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="contact">
                    <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                    <li className="icon solid fa-phone">(000) 000-0000</li>
                    <li className="icon solid fa-home">1234 Somewhere Road #8254<br />
                        Nashville, TN 00000-0000</li>
                </ul>
            </section>
        </React.Fragment>
    );
}

export default NavigationHubLinks;