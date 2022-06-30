import React from 'react'
import { Box, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    main: {
        height: 'fit-content',
    }
    ,
    trmTitle: {
        font: 'normal normal normal 4rem Gopher',
        color: '#CFFE00',
        textAlign: 'center',
        padding: '5% 0rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem'
        }
    },
    trmbody: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15%'
    },
    trmTextGrp: {
        width: '60%',
    },
    trmHeadText: {
        font: 'normal normal bold 3rem Gopher',
        color: '#CFFE00',
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    },
    trmSubHeadText: {
        font: 'normal normal bold 2.5rem Gopher',
        color: '#CFFE00',
        paddingTop: '3rem',
    },
    trmText: {
        font: 'normal normal bold 2.2rem Gopher-hairline ',
        lineHeight: '2.5',
        textAlign: 'left',
        color: '#B1B1B1',
        padding: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        }
    }

}))

export function TermsAndConditionsTemplates() {
    const classes = useStyles()
    return (
        <Box className={classes.main}>
            <h1 className={classes.trmTitle}> Terms and conditions</h1>

            <Box className={classes.trmbody}>
                <Box className={classes.trmTextGrp}>
                    <h1 className={classes.trmHeadText}> 1. USE OF THE PLATFORM </h1>

                    <h1 className={classes.trmText}>
                        Welcome to www.brebel.in ("Site")  <br />The website www.brebel.in is owned and operated by YUV Technologies Private Limited ("Company”) a company incorporated under the provisions of the Companies Act, 1956 with its registered office at House No. 19-B, Pushp Vihar  Extension, Indore, Madhya Pradesh - 452010. You may be accessing our Site from a computer or mobile phone device (through an iOS or Android application, for example) and these Terms of Use govern your use of our Site and your conduct, regardless of the means of access. These Terms of Use govern all the products offered on the Site.
                    </h1>

                    <h1 className={classes.trmText}>
                        The Site is only to be used for your personal non-commercial use and information. Your use of the Site and features of the Site shall be governed by these Terms and Conditions (hereinafter " Terms of Use ") along with the Privacy Policy, Shipping Policy and Cancellation, Refund and Return Policy (together " Policies ") as modified and amended from time to time.
                    </h1>

                    <h1 className={classes.trmText}>
                        By mere accessing or using the Site, you are acknowledging, without limitation or qualification, to be bound by these Terms of Use and the Polices, whether you have read the same or not. ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR UNCONDITIONAL AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT, SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING. If you do not agree to any of the terms enumerated in the Terms of Use or the Policies, please do not use the Site. You are responsible to ensure that your access to this Site and material available on or through it are legal in each jurisdiction, in or through which you access or view the Site or such material.
                    </h1>

                    <h1 className={classes.trmText}>
                        Company reserves the unilateral right to change the particulars contained in the Terms of Use or the Policies from time to time and at any time, without notice to its users and in its sole discretion. If Company decides to change the Terms of Use or Policies. Any change or modification to the Terms of Use and the Policies will be effective immediately from the date of such upload of the Terms of Use and Policies on the Site. Your continued use of the Site following the modifications to the Terms of Use and Policies constitutes your acceptance of the modified Terms of Use and Policies whether or not you have read them. For this reason, you should frequently review these Terms of Use, our Guidelines and Rules and any other applicable policies, to understand the terms and conditions that apply to your use of the Site.
                    </h1>

                    <h1 className={classes.trmSubHeadText}> PRIVACY PRACTICES</h1>
                    <h1 className={classes.trmText}>
                        We understand the importance of safeguarding your personal information and we have formulated a Privacy Policy, to ensure that your personal information is sufficiently protected. Apart from these Terms of Use, the Privacy Policy shall also govern your visit and use of the Site. Your continued use of the Site implies that you have read and accepted the Privacy Policy and agree to be bound by its terms and conditions. You consent to the use of personal information by the Company in accordance with the terms of and purposes set forth in the Privacy Policy, the same may be subject to amendment from time to time at the sole discretion of the Company.
                    </h1>
                    <h1 className={classes.trmText}>
                        This Site is directed to be used by adults only. We assume that any minor, if at all, accessing our Site is under the supervision of their guardians. The Company or its associates do not knowingly collect information from minors. You will be responsible for maintaining the confidentiality of your account, password, and restricting access to your computer, and you hereby accept responsibility for all activities that occur under your account and password. You acknowledge that the information you provide, in any manner whatsoever, are not confidential or proprietary and does not infringe any rights of a third party in whatsoever nature.
                    </h1>
                    <h1 className={classes.trmText}>
                        If you are accessing, browsing and using the Site on someone else’s behalf; you represent that you have the authority to bind that person to all the terms and conditions herein. In the event that the person refuses to be bound as the principal to the Terms of Use, you agree to accept liability for any harm caused by any wrongful use of the Site resulting from such access or use of the Site in whatsoever nature.
                    </h1>
                    <h1 className={classes.trmText}>
                        If you know or have reasons to believe that the security of your account has been breached, you should contact us immediately at the 'Contact Information' provided below. If we have found a breach or suspected breach of the security of your account, we may require you to change your password, temporarily or permanently block or suspend your account without any liability to the Company.
                    </h1>
                    <h1 className={classes.trmText}>
                        We reserve the right to refuse service and/or terminate accounts without prior notice if these Terms of Use are violated or if we decide, in our sole discretion, that it would be in Company’s and Company’s best interests to do so. You are solely responsible for all contents that you upload, post, email or otherwise transmit via the Site. The information provided to us shall be maintained by us in accordance with our Privacy Policy.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRODUCT INFORMATION</h1>
                    <h1 className={classes.trmText}>
                        Company attempts to be as accurate as possible in the description of the product on the Site. However, Company does not warrant that the product description, colour, information or other content of the Site is accurate, complete, reliable, current or error-free. The Site may contain typographical errors or inaccuracies and may not be complete or current. The product pictures are indicative and may not match the actual product.
                    </h1>
                    <h1 className={classes.trmText}>
                        Company reserves the right to correct, change or update information, errors, inaccuracies or omissions at any time (including after an order has been submitted ) without prior notice. Please note that such errors, inaccuracies or omissions may also relate to pricing and availability of the products.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRODUCT USE</h1>
                    <h1 className={classes.trmText}>
                        The products and services available on the Site, and the samples, if any, that Site may provide you, are for your personal and/or professional use only. The products or services, or samples thereof, which you may receive from us, shall not be sold or resold for any/commercial reasons.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> PRICING INFORMATION </h1>
                    <h1 className={classes.trmText}>
                        The Company strives to provide accurate product and pricing information, however errors may occur.
                    </h1>
                    <h1 className={classes.trmText}>
                        Company cannot confirm the price of the product until you make the order. Without limiting the generality of Clause 7 (Cancellations, Refunds and Returns) below, if a product is listed at an incorrect price or with incorrect information due to any technical error, Company shall have the right, at its sole discretion, to refuse or cancel any orders placed for that product, unless the product has already been delivered. In the event that an item is wrongly priced, the Company may, at its discretion, either contact you for instructions or cancel your order and notify you of such cancellation. Unless the product ordered by you has been delivered, your offer will not be deemed accepted and the Company will have the right to modify the price of the product/ service and contact you for further instructions using the e-mail address provided by you during the time of registration or placing of order, or cancel the order and notify you of such cancellation. In the event that Company accepts your order the same shall be debited to your credit card/ debit card account and duly notified to you by email that the payment has been processed. The payment may be processed prior to Company’s dispatch of the product that you have ordered. If we have to cancel the order after we have processed the payment, the said amount will be reversed to your credit / debit card account.
                    </h1>
                    <h1 className={classes.trmText}>
                        PRICES AND AVAILABILITY OF THE PRODUCTS PROVIDED OR OFFERRED ON THE SITE ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE AND AT THE SOLE DISCRETION OF COMPANY. Company may revise and cease to make available any product/ services at anytime. In the event, the Company is unable to deliver the product to you on time or at all, you will be notified by an e-mail and your order will be automatically cancelled due to unavailability of the product or at your instructions due to failure to deliver the product on the expected time of delivery by our delivery partners. The Company shall not be liable to pay for any damages in such an event owing to cancellation of the order or delay in delivery.
                    </h1>


                    <h1 className={classes.trmSubHeadText}> CANCELLATIONS, REFUNDS AND RETURNS</h1>
                    <h1 className={classes.trmText}>Please refer to our Warranty and Support page provided on our Site.</h1>


                    <h1 className={classes.trmSubHeadText}>MODE OF PAYMENT</h1>
                    <h1 className={classes.trmText}>Payments for the products available on the Site may be made in the following ways:</h1>
                    <h1 className={classes.trmText}>Payments can be made by Credit Cards, Debit Cards, Net Banking, Wallets, e-Gift cards, and reward points.
                        Credit card, Debit Card and Net Banking payment options are instant payment options and recommended to ensure faster processing of your order.</h1>


                    <h1 className={classes.trmSubHeadText}>INTELLECTUAL PROPERTY RIGHTS</h1>
                    <h1 className={classes.trmText}>The names and logos and all related product names, design marks and slogans are the trademarks, logos or service marks (hereinafter referred to as "Marks") of the Company. No trademark or service mark license is granted in connection with the materials contained on this Site. Access to this Site does not authorize anyone to use any Marks in any manner. Marks displayed on this Site, whether registered or unregistered, of the Company are the intellectual property of the Company.
                        <br /> The Company expressly and exclusively reserve all the intellectual property rights in all text, programs, products, processes, technology, content, software and other materials, which appear on this Site, including its looks and feel. The compilation (meaning the collection, arrangement and assembly) of the content on the Site is the exclusive property of the Company and are protected by the Indian copyright laws and International treaties. Consequently, the materials on this Site shall not be copied, reproduced, duplicated, republished, downloaded, posted, transmitted, distributed or modified in whole or in part or in any other form whatsoever, except for your personal, non-commercial use only. No right, title or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying, reproducing, duplicating, republishing, posting, transmitting, distributing or modifying.
                    </h1>

                    <h1 className={classes.trmSubHeadText}>LIMITED LICENSE</h1>
                    <h1 className={classes.trmText}>The Company grants you limited, non-exclusive, non-transferable, non-sublicensable license to access, and make personal and non-commercial use of the Site. All rights not expressly granted to you in these Terms of Use, are reserved and retained by the Site and its affiliates.
                        <br /> The Company reserves the right, at any time, without notice, and at its sole discretion, to terminate your license to use the Site and to block and prevent your future access the Site.
                    </h1>

                    <h1 className={classes.trmSubHeadText}>REPRESENTATIONS AND WARRANTIES</h1>
                    <h1 className={classes.trmText}>This Site is provided to you "AS IS". We make no representations regarding the use of or the result of the use/depiction of the Contents on the Site in terms of their correctness, accuracy, reliability, or otherwise. The Company shall not be liable for any loss suffered in any manner by the user as a result of depending directly or indirectly on the depiction of the Content on this Site.
                        <br />You acknowledge that this Site is provided only on the basis set out in the Terms of Use. Your uninterrupted access or use of this Site on this basis may be prevented by certain factors outside our reasonable control including, without limitation, the unavailability, inoperability or interruption of the internet or other telecommunications services or as a result of any maintenance or other service work carried out on this Site.
                        <br />The Company shall have the right, at any time, to change or discontinue any aspect or feature of the Site, including, but not limited to, content, hours of availability and equipment needed for access or use. Further, the Site may discontinue disseminating any portion of information or category of information. The Company does not accept any responsibility and will not be liable for any loss or damage whatsoever arising out of or in connection with any ability/inability to access or to use the Site.
                    </h1>

                    <h1 className={classes.trmText}>DISCLAIMER OF WARRANTY AND LIMITATION OF LIABILITY THE SITE IS PRESENTED "AS IS." NEITHER WE NOR OUR HOLDING, SUBSIDIARIES, AFFILIATES, PARTNERS, OR LICENSORS MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, IN CONNECTION WITH THESE TERMS AND CONDITIONS OR THE SITE OR ANY OF THE CONTENT, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OR FITNESS FOR A PARTICULAR PURPOSE, EXCEPT TO THE EXTENT SUCH REPRESENTATIONS AND WARRANTIES ARE NOT LEGALLY EXCLUDABLE.</h1>
                    <h1 className={classes.trmText}>YOU AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER WE NOR OUR HOLDING, SUBSIDIARIES, AFFILIATES, PARTNERS, OR LICENSORS WILL BE RESPONSIBLE OR LIABLE (WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE) UNDER ANY CIRCUMSTANCES FOR ANY (a) INTERRUPTION OF BUSINESS; (b) ACCESS DELAYS OR ACCESS INTERRUPTIONS TO THE SITE; (c) DATA NON-DELIVERY, LOSS, THEFT, MISDELIVERY, CORRUPTION, DESTRUCTION OR OTHER MODIFICATION; (d) LOSS OR DAMAGES OF ANY SORT INCURRED AS A RESULT OF DEALINGS WITH OR THE PRESENCE OF OFF-WEBSITE LINKS ON THE SITE; (e) VIRUSES, SYSTEM FAILURES OR MALFUNCTIONS WHICH MAY OCCUR IN CONNECTION WITH YOUR USE OF THE SITE, INCLUDING DURING HYPERLINK TO OR FROM THIRD PARTY WEBSITES; (f) ANY INACCURACIES OR OMISSIONS IN CONTENT; OR (g) EVENTS BEYOND THE REASONABLE CONTROL OF THE COMPANY. WE MAKE NO REPRESENTATIONS OR WARRANTIES THAT DEFECTS OR ERRORS WILL BE CORRECTED.</h1>
                    <h1 className={classes.trmText}>This disclaimer constitutes an essential part of this Terms of Use.</h1>


                    <h1 className={classes.trmSubHeadText}> TERMINATION</h1>
                    <h1 className={classes.trmText}>These Terms of Use are effective unless and until terminated by either you or the Company.</h1>
                    <h1 className={classes.trmText}>You may terminate the Terms of Use at any time, provided that you discontinue any further use of this Site. The Company may terminate the Terms of Use at any time and may do so without notice, and accordingly deny you access to the Site, such termination will be without any liability to the Site.</h1>
                    <h1 className={classes.trmText}>Upon any termination of the Terms of Use by either you or the Company, you must promptly destroy all materials downloaded or otherwise obtained from this Site, as well as all copies of such materials, whether made under the Terms of Use or otherwise. Any such termination of the Terms of Use shall not cancel your obligation to pay for the product already ordered from the Site or affect any liability that may have arisen under the Terms of Use.</h1>

                    <h1 className={classes.trmSubHeadText}>INDEMNITY </h1>
                    <h1 className={classes.trmText}>You agree to defend, indemnify and hold harmless the Company, its employees, directors, officers, agents and their successors and assigns, its holding, subsidiaries, affiliates, partners, or licensors from and against any and all claims, liabilities, damages, losses, costs and expenses, including attorney's fees, caused by or arising out of claims based upon your actions or inactions, which may result in any loss or liability to the Company including but not limited to breach of any warranties, representations or undertakings or in relation to the non-fulfilment of any of your obligations under the Terms of Use, or arising out of the your violation of any applicable laws, regulations including but not limited to Intellectual Property Rights, payment of statutory dues and taxes, claim of libel, defamation, violation of rights of privacy or publicity, loss of service by other subscribers and infringement of intellectual property or other rights. This clause shall survive the expiry or termination of the Terms of Use.</h1>

                    <h1 className={classes.trmSubHeadText}>GOVERNING LAW AND JURISDICTION </h1>
                    <h1 className={classes.trmText}>The Terms of Use and the Policies shall be construed in accordance with the applicable laws of India. For proceedings arising therein the Courts at Mumbai shall have exclusive jurisdiction.</h1>
                    <h1 className={classes.trmText}>Any dispute or difference either in interpretation or otherwise, of the Terms of Use and other Policies on the Site, between the parties hereto, shall be referred to an independent arbitrator who will be appointed by mutually and his decision shall be final and binding on the parties hereto. The above arbitration shall be in accordance with the Arbitration and Conciliation Act, 1996 as amended from time to time. The seat and venue of arbitration shall be held in Mumbai.</h1>
                    <h1 className={classes.trmText}>Without any prejudice to particulars listed in Clause 10 above, the Company shall have the right to seek and obtain any injunctive, provisional or interim relief from any court of competent jurisdiction to protect its trademark or other intellectual property rights or confidential information or to preserve the status quo pending arbitration.</h1>
                    <h1 className={classes.trmText}>For disputes relating to orders outside India, International arbitration rules of Indian Arbitration and Conciliation Act 1996 shall apply. The seat and venue of international arbitration shall be Mumbai.</h1>

                    <h1 className={classes.trmSubHeadText}>SITE SECURITY </h1>
                    <h1 className={classes.trmText}>You are prohibited from violating or attempting to violate the security of the Site, including, without limitation,</h1>
                    <h1 className={classes.trmText}>accessing data not intended for you or logging onto a server or an account which you are not authorized to access;<br />
                        attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization;<br />
                        attempting to interfere with service to any other user, host or network, including, without limitation, via means of submitting a virus to the Site, overloading, "flooding," "spamming," "mail bombing" or "crashing;"<br />
                        sending unsolicited email, including promotions and/or advertising of products or services; or forging any header or any part of the header information in any email or newsgroup posting. Violations of system or network security may result in civil or criminal liability<br /></h1>
                    <h1 className={classes.trmText}>sending unsolicited email, including promotions and/or advertising of products or services; or forging any header or any part of the header information in any email or newsgroup posting. Violations of system or network security may result in civil or criminal liability</h1>


                    <h1 className={classes.trmSubHeadText}>ENTIRE AGREEMENT</h1>
                    <h1 className={classes.trmText}>If any part of these Terms of Use is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed to be superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Terms of Use shall continue to be in effect. Unless otherwise specified herein, these Terms of Use constitutes the entire agreement between you and Company with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written.</h1>
                    <h1 className={classes.trmText}>Company's failure to act with respect to a breach by you or others does not waive its right to act with respect to the breach or subsequent and similar breaches.</h1>


                    <h1 className={classes.trmSubHeadText}> GENERAL</h1>
                    <h1 className={classes.trmText}>You acknowledge and hereby agree to these Terms and Conditions and that it constitute the complete and exclusive agreement between us concerning your use of the Site, and supersede and govern all prior proposals, agreements, or other communications.</h1>
                    <h1 className={classes.trmText}>We reserve the right, in our sole discretion, to change/ alter/ modify these Terms and Conditions at any time by posting the changes on the Site. Any changes are effective immediately upon posting to the Site. Your continued use of the Site thereafter constitutes your agreement to all such changed Terms and Conditions. We may, with or without prior notice, terminate any of the rights granted by these Terms and Conditions. You shall comply immediately with any termination or other notice, including, as applicable, by ceasing all use of the Site.</h1>
                    <h1 className={classes.trmText}>Nothing contained in these Terms and Conditions shall be construed as creating any agency, partnership, affiliation, joint venture or other form of joint enterprise between us. Our failure to require your performance of any provision hereof shall not affect our full right to require such performance at any time thereafter, nor shall our waiver of a breach of any provision hereof be taken or held to be a waiver of the provision itself. In the event that any provision of these Terms and Conditions shall be unenforceable or invalid under any applicable law or be so held by any applicable arbitral award or court decision, such unenforceability or invalidity shall not render these Terms and Conditions unenforceable or invalid as a whole but these Terms and Conditions shall be modified, to the extent possible, by the adjudicating entity to most fully reflect the original intent of the parties as reflected in the original provision. The headings in the Terms and Conditions are for convenience only and shall not be used in its interpretation.</h1>
                </Box>

            </Box>
        </Box>
    )
}
