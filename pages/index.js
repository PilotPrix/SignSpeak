import React from 'react';

export default function All(props) {
    return (
        <div>
            <header>
                <a className="cta" href="Level1" target="_blank">Learn</a>
                <a className="cta" href="Live" target="_blank">Live</a>
            </header>

            <section className="home" id="#">
                <div className="logo">
                    <img src="/images/1.png" width="850" height="900" />
                </div>

                <div className="shortlogo">
                    <img src="/images/short.png" width="250" height="250" />
                </div>

                <div className="words">
                    <h1>------------ WELCOME TO</h1>
                </div>

                <div className="words2">
                    <h1>Accessible Communication </h1>
                </div>
            </section>

            <section id="about" className="about-wallpaper">
                <div className="about-picture">
                    <img src="/images/2.jpg" width="490" height="570" />
                </div>
                <div className = "text">
                    <h2> What is Sign Speak </h2>
                </div>
                <div className = "text2">
                    <h3> The Future of Communication </h3>
                </div>
                <div className = "text3">
                    <p> Sign language is a universal language which allows many individuals to exercise their intellect through common communication. Here at SignSpeak, we create an encouraging learning environment that provides computer vision sign language tests to track progression and to perfect sign language skills. We plan to expand our company to be known world wide to fill the lack of a proper learning tool that is accessible to everyone, everywhere, for free.</p>
                </div>

                <div className = "text3">
                    <p> Click the book to start learning and click the tv to see Sign Speak in action!</p>
                </div>
                <div className = "horizontal-flex">
                    <a className="buttons" href="/Level1" target="_blank">
                        <ion-icon name="book-outline" size="large"></ion-icon>
                    </a>
                    <a className="buttons" href="/Live" target="_blank">
                        <ion-icon name="tv-outline" size="large"></ion-icon>
                    </a>
                </div>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" ></script>
                <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" ></script>
            </section>
            <footer className="footer">
                <ul className="social-list">
                    <a className="" href="https://www.british-sign.co.uk/" target="_blank">
                        <ion-icon name="language-outline" size="large"></ion-icon>
                    </a>
                </ul>
            </footer>
        </div>
    );
}