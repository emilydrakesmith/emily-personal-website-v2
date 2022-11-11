import React from 'react';
import * as styles from '../styles/thanksgiving.module.css';

export default function Thanksgiving() {
    return (
        <div className={styles.thanksgiving_main}>
            <section className={styles.thanksgiving_header}>
                <h1>Thanksgiving</h1>
                <hr />
            </section>
            <section className={styles.thanksgiving_content}>
                <p>Usually I make a turkey because I have a favorite apple cider brine recipe.  That said, I don't think I'll be able to this year because I don't have the fridge space.  It needs to brine for four days in a 5 gal bucket and I haven't bought a mini-fridge yet.</p>
                <p>We can bring a ham from Honeybaked Ham... I'm pretty sure we have gift cards, so it won't even cost anything appreciable.  I think a second main for ~8 of us is good.</p>
                <p>I really like to make sides.  I do a cranberry-cherry sauce that's a little spicy (not much, and really, it's amazing).  I also do sausage dressing which is one of the major highlights of my year.  If anyone wants a taste of something I picked up in the South, I can do a squash casserole too (depending on the availability of summer squash). I was thinking about doing a baked brie as well.</p>
                <p>If anyone wants us to bring a dessert, I make a really good apple caramel pie.  Jen also makes pumpkin whoopie pies that are outstanding.</p>
                <p>We haven't been able to make the holiday egg nog yet and I don't think there's time before Thanksgiving, but I did find that my favorite wine is back in stock again so I'll pick up a bottle or so on the way.</p>
            </section>
        </div>
    );
}