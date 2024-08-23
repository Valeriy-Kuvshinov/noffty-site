import { SvgRender } from "../../components/general/SvgRender"

export default function PrivacyPolicy() {
    return (<main className="privacy-policy-page full w-h-100">
        <section className="page-contents flex column align-center w-h-100 layout-row">
            <h1 className="flex row full-center">
                <SvgRender iconName="lock" />
                <span>Privacy Policy</span>
                <SvgRender iconName="lock" />
            </h1>

            <article className="policy-section w-100 layout-row">
                <h2 className="w-fit">1. Introduction</h2>
                <p>
                    Noffty Productions have made its games as Free Apps. These SERVICES are provided by Noffty Productions at no cost and are intended for use as is.
                    This page is used to inform visitors that we do not collect any personal information.
                </p>
            </article>

            <article className="policy-section w-100 layout-row">
                <h2 className="w-fit">2. Information Collection and Use</h2>
                <p>{`Noffty Productions does not collect any user information at all.
                    Our apps may use third party services that may collect information used to identify you.
                    For example, certain apps which are available at Google Play Store (such as the game, Betorched)`}.
                </p>
                <p>Below are third party service providers that are used by some of our apps, and their privacy policies:</p>
                <ul>
                    <li>
                        <a href="https://www.google.com/policies/privacy/"
                            target="_blank" rel="noopener noreferrer">
                            Google Play Services</a>
                    </li>
                    <li>
                        <a href="https://support.google.com/admob/answer/6128543?hl=en"
                            target="_blank" rel="noopener noreferrer">
                            AdMob</a>
                    </li>
                    <li>
                        <a href="https://unity3d.com/legal/privacy-policy"
                            target="_blank" rel="noopener noreferrer">
                            Unity</a>
                    </li>
                </ul>
            </article>

            <article className="policy-section w-100 layout-row">
                <h2 className="w-fit">3. Links to Other Sites</h2>
                <p>
                    noffty.com may contain links to other sites. If you click on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.
                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
            </article>

            <article className="policy-section w-100 layout-row">
                <h2 className="w-fit">4. Updates to This Policy</h2>
                <p>
                    Noffty Productions may update its Privacy Policy from time to time.
                    Thus, you are advised to review this page periodically for any changes.
                    We will notify you of any significant changes by posting the new Privacy Policy on this page.
                </p>
            </article>

            <article className="policy-section w-100 layout-row">
                <h2 className="w-fit">5. Contact Us</h2>
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us <a href="/contact">here</a>.
                </p>
                <br />
                <p>This policy is effective as of August 21, 2024</p>
            </article>
        </section>
    </main>)
}