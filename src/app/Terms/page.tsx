"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Terms() {
  return (
    <div className="h-full relative w-full px-2 py-10 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
     <div>
     <h1 className="md:text-5xl  text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
    TERMS AND CONDITIONS
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div></div> 

      <div className="container mx-auto  px-4 py-8  bg-[#0E0E10]  rounded-2xl w-full">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-lg mb-4">Zenvest Financial Technologies Pvt. Ltd., whose registered office is situated at Aaji Ajoba Udayan, Maruti Nagar, Ashokan, Dahisar East, Mumbai 400 068, India (hereinafter shall be referred to as "Zenvest Financial Technologies" or "Company" or "us" or "we" or "Zenvest") are the owner of the mobile application by the name Zenvest ("App") and website at zenvest.vercel.app ("Website") (App and Website are hereinafter together referred to as the "Platform").</p>
        <p className="text-lg mb-4">As a user ("User" or "You") of the Platform, you understand that the Platform provides access between multiple Users in the form of consumers, financial institutions, data partners, and other partners including lenders, borrowers, service providers, etc., with a view to facilitating lending and borrowing activities, including providing other financial products like credit cards etc. between the Users. A list of lending partners will be provided on our website and app, and will be updated periodically. The lending partner for the user will be clearly mentioned in all the legal documents sent to the user.</p>
        <p className="text-lg mb-4">It is hereby clarified that the term "Users" shall mean any person using the Platform i.e., consumers, financial institutions, regulated entities, and other partners. Your use of this Platform implies that You have read, understood, and agreed to abide by the following disclaimer, terms & conditions ("Terms & Conditions").</p>
        <p className="text-lg mb-4">These Terms & Conditions read together with our privacy policy govern Your usage of the Platform and the terms for the purchase of the Products from the Platform ("Product").</p>
        <p className="text-lg mb-4">Please read these Terms & Conditions carefully before accessing or using our Platform. By accessing or using any part of the Platform, you agree to be bound by these Terms & Conditions. If You do not agree to all the terms and conditions of this agreement, then You may not access the Platform or use any services provided by Us.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">GENERAL</h2>
        <p className="text-lg mb-4">Zenvest is a platform facilitating the loan transactions between the borrowers and the NBFCs/Banks. All loan applications are approved and sanctioned by NBFCs/Banks registered with RBI and communicated upfront during the Loan application. The Platform provides access to an online platform bringing together consumers, financial institutions, data partners, and other partners willing to abide by the Terms & Conditions herein. Zenvest's lending partners provide various kinds of personal loan products as specifically supplied by the Users through the Platform.</p>
        <p className="text-lg mb-4">In the event You wish to avail any of the Products displayed on the Platform you will be required to provide certain information and our representatives, such as Mr. Bakulesh Rane, may contact You through phone at 9619001470 or email to understand Your requirements.</p>
        <p className="text-lg mb-4">Zenvest provides various services, including but not limited to ("Services"):</p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg">Facilitating the purchase and sale of Product on its Platform;</li>
          <li className="text-lg">Assisting its Users to obtain a Product from various banks and non-banking financial companies who are the lending partners of Zenvest;</li>
          <li className="text-lg">Assisting its Users to obtain their credit report through authorized agents partnered with Zenvest. Zenvest will monitor and update the credit report obtained by the customer through the use of the Platform as and when Zenvest receives such report from the authorized agents;</li>
          <li className="text-lg">Provision of data analysis and social score based on device data and User’s Facebook, Twitter, LinkedIn or any other social media accounts that are linked with User’s account on the Platform;</li>
        </ul>
        <p className="text-lg mb-4">In the event You have registered Your phone number on the ‘Do Not Disturb’ registers with Your network provider, You shall ensure to take all steps to enable the Company’s representative's to contact You via phone to provide details about different financial products and You shall ensure that such calls received by You are pursuant to You providing Us with information and You shall not register a complaint with the relevant authorities for the same. For the provision of the above-mentioned Services, Zenvest will be using and sharing the information of the User with multiple financial institutions and other parties, as may be required for the purpose mentioned above and Zenvest shall also run multiple credit checks to be able to get the best available offers to suit the needs of the Users. The collection, storing, use, and transfer of information shared by the User shall be governed in accordance with the Privacy Policy available at zenvest.vercel.app/privacypolicy</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">ELIGIBILITY</h2>
        <p className="text-lg mb-4">The User of this Platform unequivocally declares and agrees that the User is a natural/ legal person who has attained the age of at least 18 years and is legally allowed to enter into a contract in India.</p>
        <p className="text-lg mb-4">The User is allowed to utilize the Services in accordance with the terms and conditions detailed hereinafter. By registering on the Platform, the User hereby undertakes to agree and abide by the Terms & Conditions detailed herein. If the User violates any of these Terms & Conditions, or otherwise violates an agreement entered into through the medium of the Platform, Zenvest may terminate the User’s membership, delete his/her profile and any content or information posted online by the User on the Platform and / or prohibit the User from using or accessing the Platform at any time in its sole discretion, with or without notice, including without limitation if Zenvest believes that User is under the age of 18 years.</p>
        <div>
    
<h2 className="text-2xl font-bold">ACCEPTANCE OF TERMS AND CONDITIONS</h2>
        <p className="text-lg mb-4">As a User of this Platform, you have agreed to the Terms & Conditions provided hereunder or anywhere else on this Platform including but not limited to disclaimers on this Platform. You are advised to read and understand the said Terms & Conditions and in case You do not wish to agree to these Terms & Conditions, please refrain from using the Platform.</p>
        <p className="text-lg mb-4">Zenvest reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms and Conditions, at any time. Any changes made to these Terms and Conditions will be communicated to the email address of the User maintained in our records, within a reasonable time from the date of modification. Zenvest does not take responsibility in case the email address provided by the User is either incorrect or does not belong to the user. The User’s continued use of the Platform following the notification of modification of these Terms and Conditions will be construed to mean the acceptance by the User of the modified Terms and Conditions.</p>

        <h2 className="text-2xl font-bold mt-8">YOUR ACCOUNT</h2>
        <p className="text-lg mb-4">If You wish to use the Platform, You are required to maintain an account and will be required to furnish certain information and details, including Your name, email id, contact number, and any other information deemed necessary by Zenvest and as further detailed in the Privacy Policy. You are responsible for maintaining the confidentiality and security of Your account, password, activities that occur in or through Your account, and for restricting access to Your computer to prevent unauthorized access to Your account. You agree to accept responsibility for all activities that occur under Your account or password. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if You have any reason to believe that Your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner. Please ensure that the details You provide Us with are true, correct, accurate, and complete. Upon Zenvest gaining knowledge or having any reasonable suspicion that the information provided by You is wrong, inaccurate, or incorrect, Zenvest shall immediately terminate Your account without any notice to You in this regard. In the event of any changes to the information shared by You at the time of registering Yourself on the Platform, You shall be responsible for forthwith notifying the said changes to Us.</p>
        <p className="text-lg mb-4">You can access and update most of the information You provided us on the ‘dashboard’ area of Your account after You log-in or by writing to us at contact@zenvest.vercel.app. The right to use this Platform is personal to the User and is not transferable to any other person or entity.</p>
        <p className="text-lg mb-4">You shall at all times abide by the Terms and Conditions stated herein and any breach of these conditions may also lead to Zenvest terminating Your account and appropriate civil and criminal remedies will be sought against You as provided under the laws of India.</p>

        <h3 className="text-xl font-bold mt-8">Experian T&C</h3>
        <p className="text-lg mb-4">You understand that your personal information (including your credit information) may be transferred to other parties, to provide you with our services and you consent to such transfers. You allow us to verify your credit bureau presence with CIC on an ongoing basis or the expiry of 6 months from the date the consent was collected; whichever is earlier, and in turn permit CICs to establish your credit report’s availability. For more information on how securely and respectfully we do this please refer to our Privacy Policy.</p>

        <h2 className="text-2xl font-bold mt-8">PRIVACY</h2>
        <p className="text-lg mb-4">Zenvest collects certain information from You in order to provide the Services. Zenvest’s use of Your personal information is governed in accordance with the Privacy Policy.</p>

        <h2 className="text-2xl font-bold mt-8">LICENSE AND ACCESS</h2>
        <p className="text-lg mb-4">Zenvest grants You a limited license to access and use the Platform for availing the Services, but not to download any material from it (other than page caching) or modify it, or any portion of it, except with express written consent of Zenvest and / or its affiliates, as may be applicable. Any unauthorized access to the Platform or any networks, servers, or computer systems connected to the Platform and any attempt to modify, adapt, translate or reverse engineer any part of the Platform or re-format or frame any portion of the pages of the Platform, save to the extent expressly permitted by these Terms & Conditions, is not permitted. This license is non-transferable and does not permit any resale or commercial use of this Platform or its contents; any downloading or copying of account information for the benefit of anyone other than Your use; or any use of data mining, robots, or similar data gathering and extraction tools. The Platform or any portion of the Platform (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed, or otherwise exploited for any commercial purpose without express written consent of Zenvest and / or its affiliates, as may be applicable. Any unauthorized use of the Platform shall terminate the permission or revoke the license granted by Zenvest.</p>

        <h2 className="text-2xl font-bold mt-8">MONITORING OF THE PLATFORM AND YOUR ACCOUNT</h2>
        <p className="text-lg mb-4">Zenvest has the right and liberty to monitor the content of the Platform at all times which shall include information provided in Your account. The monitoring of the Platform is important to determine the veracity of the information provided by You and that every User remains in consonance with the Terms & Conditions provided herein. Subject to the Terms & Conditions mentioned herein, Zenvest shall also have the liberty to remove any objectionable content which is in contravention of the Terms & Conditions herein or share such information with any governmental authority as per procedures laid down by the law for the time being in force in India.</p>
        <h2 className="text-2xl font-bold">SERVICE SUSPENSION</h2>
        <p className="text-lg mb-4">Zenvest may stop providing the Services and may terminate use of it at any time without giving notice of termination to You. Unless Zenvest informs the User otherwise, upon any termination, (a) the rights and licenses granted to You in these terms will end; and (b) User must stop using the Platform forthwith. Zenvest reserves the right to suspend or cease providing any Service and shall have no liability or responsibility to the User in any manner whatsoever if it chooses to do so.</p>

        <h2 className="text-2xl font-bold">PROHIBITED USES</h2>
        <p className="text-lg mb-4">In addition to other prohibitions as set forth in the Terms & Conditions, You are prohibited from using the Platform for any unlawful purpose; to solicit others to perform or participate in any unlawful acts; to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; to infringe upon or violate our intellectual property rights or the intellectual property rights of others; to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; to submit false or misleading information; to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; to collect or track the personal information of others; to spam, phish, pharm, pretext, spider, crawl, or scrape; for any obscene or immoral purpose; or to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate Your use of the Service or any related website for violating any of the prohibited uses.</p>

        <h2 className="text-2xl font-bold">REFUND & CANCELLATION POLICY</h2>
        <p className="text-lg mb-4">Any additional payment made by You shall be refunded back within 30 days pursuant to the reconciliation of the accounts by Zenvest. There will be no cancellation of the service once You have received the loan amount in Your bank account.</p>

        <h2 className="text-2xl font-bold">LIMITATION OF LIABILITY AND DISCLAIMER OF WARRANTIES</h2>
        <p className="text-lg mb-4">Notwithstanding anything to the contrary contained herein, neither Zenvest nor its affiliated companies, subsidiaries, officers, directors, employees or any related party shall have any liability to You or to any third party for any indirect, incidental, special or consequential damages or any loss of revenue or profits arising under or relating to these Terms & Conditions. To the maximum extent permitted by law, You waive, release, discharge and hold harmless Zenvest, its affiliated and subsidiary companies, and each of their directors, officers, employees, and agents, from any and all claims, losses, damages, liabilities, expenses and causes of action arising out of Your use of the Platform.</p>
        <p className="text-lg mb-4">As a User, You also acknowledge that Zenvest has maintained and carried out all possible checks and balances to assure the credibility of the Users as listed on the Platform. The information provided on the Platform is based on the information that is provided to Zenvest. In case the User does not disclose any information to Zenvest, and the same is not found out at the first instance by Zenvest despite all measures adopted to certify the ratings or credibility of a User, Zenvest shall not be responsible for any claims or liabilities. Zenvest in any event is not responsible for any default in return of money that is borrowed from the lender and the lender shall have the exclusive right to initiate proceedings against the defaulter borrower. Zenvest shall to the best of its abilities aid the concerned User in terms of provision of information to initiate any legal proceedings. However, Zenvest shall not be responsible for any default on behalf of the User. Zenvest is an information platform and the User is entitled to conduct its own diligence before taking any steps to initiate the processes outlined in the Website.</p>
        <p className="text-lg mb-4">Zenvest does not make any representations or warranties on behalf of the financial service providers, banks or NBFCs partnered with Zenvest with respect to the financial products / loans provided by such partners on the Platform. Zenvest shall be responsible only to the extent of providing the Services and all liabilities and obligations of the customers / User with respect to the financial products provided by the partners shall be governed by the separate agreement executed between such financial partners and the customers and Zenvest shall have no liability in this regard whatsoever.</p>
        <h2 className="text-2xl font-bold">YOUR USE OF THE SERVICE AND ALL INFORMATION</h2>
        <p className="text-lg mb-4">Your use of the Service and all information, products, and other content (including that of third parties) included in or accessible from the Service is at your sole risk. The Service is provided on an "as is" and "as available" basis. Company expressly disclaims all warranties of any kind as to the Service and all information, products, and other content (including that of third parties) included in or accessible from the Service, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, and noninfringement. Company makes no warranty that: (i) the Service will meet your requirements, (ii) the Service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the Service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations, or (v) any errors in the technology will be corrected and you are solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from Company or service provider through or from the Service will create any warranty not expressly stated in these terms.</p>

        <h2 className="text-2xl font-bold">INDEMNITY</h2>
        <p className="text-lg mb-4">You agree to indemnify, save, and hold Zenvest, its affiliates, contractors, employees, officers, directors, agents, and its third-party associates, licensors, and partners harmless from any and all claims, demands, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Website or App or Platform, any violation by you of these Terms & Conditions, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any threatening, libelous, obscene, harassing or offensive material posted/ transmitted by you on the Platform. Zenvest reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Zenvest, including rights to settle, and you agree to cooperate with Zenvest's defense and settlement of these claims. Zenvest will use reasonable efforts to notify you of any claim, action, or proceeding brought by a third party that is subject to the foregoing indemnification upon becoming aware of it. This paragraph shall survive termination of these Terms & Conditions.</p>
        <h2 className="text-2xl font-bold">YOUR USE OF THE SERVICE AND ALL INFORMATION</h2>
        <p className="text-lg mb-4">Your use of the Service and all information, products, and other content (including that of third parties) included in or accessible from the Service is at your sole risk. The Service is provided on an "as is" and "as available" basis. Company expressly disclaims all warranties of any kind as to the Service and all information, products, and other content (including that of third parties) included in or accessible from the Service, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, and noninfringement. Company makes no warranty that: (i) the Service will meet your requirements, (ii) the Service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the Service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations, or (v) any errors in the technology will be corrected and you are solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from Company or service provider through or from the Service will create any warranty not expressly stated in these terms.</p>

        <h2 className="text-2xl font-bold">INDEMNITY</h2>
        <p className="text-lg mb-4">You agree to indemnify, save, and hold Zenvest, its affiliates, contractors, employees, officers, directors, agents, and its third-party associates, licensors, and partners harmless from any and all claims, demands, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Website or App or Platform, any violation by you of these Terms & Conditions, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any threatening, libelous, obscene, harassing or offensive material posted/ transmitted by you on the Platform. Zenvest reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Zenvest, including rights to settle, and you agree to cooperate with Zenvest's defense and settlement of these claims. Zenvest will use reasonable efforts to notify you of any claim, action, or proceeding brought by a third party that is subject to the foregoing indemnification upon becoming aware of it. This paragraph shall survive termination of these Terms & Conditions.</p>
    
</div>
<div className="shadow-lg rounded-lg overflow-hidden">
  <div className="px-6 py-4">
    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a8 8 0 00-8 8c0 4.418 5.26 9.086 7.455 10.6a.75.75 0 001.09 0C12.74 19.086 18 14.418 18 10a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" />
        <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
      <p className="text-gray-50">Zenvest Financial Technologies Pvt. Ltd.,<br /> Aaji Ajoba Udayan, Maruti Nagar,<br /> Ashokan, Dahisar East, Mumbai 400 068, India</p>
    </div>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 4.418 5.26 9.086 7.455 10.6a.75.75 0 001.09 0C12.74 19.086 18 14.418 18 10a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-50">Email: <a href="mailto:bakulesh.rane@zenvest.in" className="text-blue-500">bakulesh.rane@zenvest.in</a></p>
    </div>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 2a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H3zm10 3a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 100-2h-1V8a1 1 0 00-1-1h-2a1 1 0 000 2h1v4h-1a1 1 0 100 2h2a1 1 0 001-1V8a1 1 0 00-1-1h-1z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-50">Phone: <a href="tel:+919619001470" className="text-blue-500">9619001470</a></p>
    </div>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-50">Hours: Mon - Sat (10:00 - 19:00)</p>
    </div>
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 2a1 1 0 011-1h2.535a1 1 0 01.707.293l1.414 1.414a1 1 0 001.414 0l1.414-1.414A1 1 0 0113.464 1H16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V2z" clipRule="evenodd" />
        <path d="M9 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zM8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z" />
      </svg>
      <p className="text-gray-50">Website: <a href="https://zenvest.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500">zenvest.vercel.app</a></p>
    </div>
  </div>
</div>


        </div>

        
    </div>
  );
}
