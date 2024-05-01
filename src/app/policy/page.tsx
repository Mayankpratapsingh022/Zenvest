"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Policy() {
  return (
    <div className="h-full relative w-full p-10 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
     <div>
     <h1 className="md:text-5xl  text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
     PRIVACY POLICY
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

      <div className="container mx-auto px-4 py-8  bg-[#0E0E10]  rounded-2xl w-full">
  <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
  
  <p className="mb-4">This Privacy Policy document ("Privacy Policy") is published in accordance with the provisions of Rule 4 (1) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 which requires the publishing of a privacy policy for handling of or dealing in personal information including sensitive personal data or information.</p>
  
  <p className="mb-4">By visiting the website, <a href="https://zenvest.vercel.app/" className="text-blue-500 hover:underline">https://zenvest.vercel.app/</a> ("Website") or the Zenvest mobile and/or web application (the "App") (collectively, the "Platform") and availing the services provided by us ("Services") you agree to be bound by the terms and conditions of this Privacy Policy.</p>
  
  <p className="mb-4">By mere access to the Platform or any part thereof, you signify your assent to this Privacy Policy and consent to the processing of your personally identifiable information (Personal Information, Sensitive Personal Data or Information) to Zenvest Financial Technologies Pvt. Ltd. ("we" or "our" or "us" or "Zenvest"). This Privacy Policy is incorporated into and subject to the Terms of Use of the Platform.</p>
  
  <h2 className="text-2xl font-bold mb-4">Collection of User Personal Information</h2>
  
  <p className="mb-4">When you use our Platform, we collect and store your information which is provided by you from time to time by explicitly seeking permissions from YOU to get the required information. Our primary goal in doing so is to provide you a safe, efficient, smooth, and customized experience and Services. This allows us to provide services and features that meet your needs, and to customize our Platform to make your experience safer and easier and to improve the Services provided by us. More importantly, we collect personal information from you that we consider necessary for achieving the aforementioned purpose.</p>
  
  <p className="mb-4">In general, you can browse the Website or App without telling us who you are or revealing any information about yourself. However, to create an account on the Platform, you must provide us with certain basic information required to provide customized services. The information we collect from you, inter alia, includes:</p>
  
  <ul className="list-disc ml-8 mb-4">
    <li>Full name;</li>
    <li>Email;</li>
    <li>Gender;</li>
    <li>Photograph;</li>
    <li>Mailing address;</li>
    <li>Postal code;</li>
    <li>Phone number;</li>
    <li>Income details;</li>
    <li>Occupational details;</li>
    <li>FATCA;</li>
    <li>Permanent Account Number (PAN);</li>
  </ul>
  
  <p className="mb-4">Wherever possible, we indicate the mandatory and the optional fields. You always have the option to not provide any information by choosing not to use a particular service or feature on the Platform. We also collect user account data which includes email address and user public profile information like name, photo, depending on the platform used by You to log into the App. This information is required as a part of the registration process to access our Service and it is also used to auto-populate relevant fields in the course of the interface of the App. We further collect other identifiable information such as your transactions history on the Platform when you set up a free account with us as further detailed below. While you can browse some sections of our Platform without being a registered member as mentioned above, certain activities (such as availing of loans from the third-party lenders on the Platform) require registration and for you to provide the above details. The Platform will clearly display the personal information it is collecting from you, and you have the option to not provide such personal information. However, this will limit the services provided to you on the Platform.</p>
  
  <p className="mb-4">Our App also collects a mobile number for verification to check the active SIM status on the device, uniquely identify you and prevent frauds and unauthorized access.</p>
  
  <div className="container mx-auto px-4 py-8">
  {/* Video KYC Section */}
  <h2 className="text-2xl font-bold mb-4">Video Know Your Customer (Video KYC) Process</h2>
  <p className="mb-4">As a part of our Video Know Your Customer (Video KYC) process, collection of your personal information has become mandatory to ensure the completion and authentication of your KYC. In this regard, permissions for microphone, camera will be mandatorily required.</p>
  
  {/* Collection of Financial SMS Information Section */}
  <h2 className="text-2xl font-bold mb-4">Collection of Financial SMS Information</h2>
  <p className="mb-4">We don’t collect, read, or store your personal SMS from your inbox. We collect and monitor only financial SMS sent by 6-digit alphanumeric senders from your inbox which helps us in identifying the various bank accounts that you may be holding, cash flow patterns, description, and amount of the transactions undertaken by you as a user to help us perform a credit risk assessment which enables us to determine your risk profile and to provide you with the appropriate credit analysis. This process will enable you to take financial facilities from the regulated financial entities available on the Platform. This Financial SMS data also includes your historical data. While using the app, it periodically sends the financial SMS information to our affiliate server and to us.</p>
  
  {/* Collection of Device Location and Device Information Section */}
  <h2 className="text-2xl font-bold mb-4">Collection of Device Location and Device Information</h2>
  <p className="mb-4">We collect and monitor the information about the location of your device to provide serviceability of your loan application, to reduce risk associated with your loan application, and to provide pre-approved customized loan offers. This also helps us to facilitate verification of the address, making a better credit risk decision, and know your customer (KYC) process. Information the App collects, and its usage, depends on how you manage your privacy controls on your device. When you install the App, we store the information we collect with unique identifiers tied to the device you are using. We collect information from the device when you download and install the App and explicitly seek permissions from You to get the required information from the device.</p>
</div>
<div className="container mx-auto px-4 py-8">
  {/* Device Information Collection */}
  <h2 className="text-2xl font-bold mb-4">Collection of Device Information</h2>
  <p className="mb-4">The information we collect from your device includes the hardware model, build model, RAM, storage, unique device identifiers like IMEI, serial number, SSAID, AAID, SIM information that includes network operator, roaming state, MNC and MCC codes, WIFI information that includes MAC address and mobile network information to uniquely identify the devices and ensure that no unauthorized device acts on your behalf to prevent frauds. We collect information about your device to provide automatic updates and additional security so that your account is not used in other people’s devices. In addition, the information provides us valuable feedback on your identity as a device holder as well as your device behavior, thereby allowing us to improve our services and provide an enhanced customized user experience to you.</p>
  
  {/* Collection of Installed Applications */}
  <h2 className="text-2xl font-bold mb-4">Collection of Installed Applications</h2>
  <p className="mb-4">We collect a list of the installed applications’ metadata information which includes the application name, package name, installed time, updated time, version name, and version code of each installed application on your device to assess your credit worthiness and enrich your profile with pre-approved customized loan offers.</p>
  
  {/* Camera Access */}
  <h2 className="text-2xl font-bold mb-4">Camera Access</h2>
  <p className="mb-4">We may require camera access to scan and capture the required KYC documents and customer verification processes thereby allowing us to auto-fill relevant fields. As a part of facilitation of the KYC journey, we require access to your camera to enable you to initiate your KYC process. This permission allows us or our authorized agents to perform your Video KYC while also taking screenshots of your original Officially Verified Documents that you present during your Video KYC journey. Video KYC enables you to complete your KYC digitally, smoothly, and efficiently. Your video shall be recorded and retained for regulatory purposes along with the screenshots of original Official Verified Documents.</p>
  
  {/* Microphone Access */}
  <h2 className="text-2xl font-bold mb-4">Microphone Access</h2>
  <p className="mb-4">We require microphone permissions to enable two-way communication between our authorized agent and you for the purpose of performing and completing your Video KYC. Your audio shall be recorded for regulatory purposes.</p>
  
  {/* Storage Access */}
  <h2 className="text-2xl font-bold mb-4">Storage Access</h2>
  <p className="mb-4">We require storage permission so that your KYC and other relevant documents can be securely downloaded and saved on your computer and phone. You can then easily upload the correct KYC related documents for faster loan application details filling and disbursal process. This ensures that you are provided with a seamless experience while using the application.</p>
</div>

<div className="container mx-auto px-4 py-8">
  {/* Collection of Other Non-Personal Information */}
  <h2 className="text-2xl font-bold mb-4">Collection of Other Non-Personal Information</h2>
  <p className="mb-4">We automatically track certain information about you based upon your behavior on our Platform. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users and improve our services. This information is compiled and analyzed on an aggregated basis. We also collect your Internet Protocol (IP) address and the URL used by you to connect your computer to the internet, etc. This information may include the URL that you just came from (whether this URL is on our website or not), which URL you next go to (whether this URL is on our website or not), your computer browser information, and your IP address.</p>
  
  <p className="mb-4">Cookies are small data files that a website stores on Your computer. We will use cookies on our website similar to other lending websites / apps and online marketplace websites / apps. Use of this information helps Us identify You in order to make our website more user friendly. Most browsers will permit You to decline cookies but if You choose to do this it might affect service on some parts of Our Website.</p>
  
  <p className="mb-4">We retain information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we collect such information into a file specific to you.</p>
  
  {/* Use and Disclosure of Personal and Other Information */}
  <h2 className="text-2xl font-bold mb-4">Use and Disclosure of Your Personal and Other Information</h2>
  <p className="mb-4">We understand the importance of your information and ensure that it is used for the intended purpose only. We access, store and use the information we collect from you in accordance with the applicable laws to provide our Services, to research and develop new ones subject to the limitations set out in this Privacy Policy.</p>
  
  <p className="mb-4">In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Platform.</p>
  
  {/* Purpose of Collecting Information */}
  <h2 className="text-2xl font-bold mb-4">Purpose of Collecting Information</h2>
  <p className="mb-4">The intended purpose of collecting information provided by you is to:</p>
  <ul className="list-disc list-inside mb-4">
    <li>establish identity and verify the same;</li>
    <li>to facilitate your KYC;</li>
    <li>monitor, improve and administer our Platform;</li>
    <li>provide our service i.e. perform credit profiling for the purpose of facilitating loans to You;</li>
    <li>design and offer customized products and services offered by our third-party financial partners;</li>
    <li>analyze how the Platform is used, diagnose service or technical problems and maintain security;</li>
    <li>send communications notifications, information regarding the products or services requested by You or process queries and applications that You have made on the Platform;</li>
    <li>manage Our relationship with You and inform You about other products or services We think You might find of some use;</li>
    <li>conduct data analysis in order to improve the Services / Products provided to the User;</li>
    <li>use the User information in order to comply with country laws and regulations;</li>
    <li>conduct KYC for our third-party lending partners based on the information shared by the User;</li>
    <li>use the User information in other ways permitted by law to enable You to take financial services from our lending partners.</li>
  </ul>
  
  <p className="mb-4">We will use and retain the information for such periods as necessary to provide You the Services on the Platform, to comply with our legal obligations, to resolve disputes, and enforce our agreements.</p>
</div>

<div className="container mx-auto px-4 py-8">
  {/* Disclosure to Third Parties */}
  <h2 className="text-2xl font-bold mb-4">Disclosure to Third Parties</h2>
  <p className="mb-4">We will share your information with only our registered third parties including our regulated financial partners for the provision of Services on the Website/App.</p>
  
  <p className="mb-4">We will share your information with third parties only in such manner as described below:</p>
  <ul className="list-disc list-inside mb-4">
    <li>We disclose and share your information with the financial service providers, banks or NBFCs and our third-party partners for the facilitation of a loan or facility or line of credit or purchase of a product;</li>
    <li>We share your information with our third-party partners in order to conduct data analysis in order to serve you better and provide Services on our Platform;</li>
    <li>We may disclose your information, without prior notice, if we are under a duty to do so in order to comply with any legal obligation or an order from the government and/or a statutory authority, or in order to enforce or apply our terms of use or assign such information in the course of corporate divestitures, mergers, or to protect the rights, property, or safety of us, our users, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction;</li>
    <li>We will disclose the data/information provided by a user with other technology partners to track how the user interacts with the Platform on our behalf;</li>
    <li>... (continue the list as per your provided text)</li>
  </ul>
  
  {/* Link to Third-Party SDK */}
  <h2 className="text-2xl font-bold mb-4">Link to Third-Party SDK</h2>
  <p className="mb-4">The App has a link to a registered third-party SDKs which collects data on our behalf and data is stored to a secured server to perform a credit risk assessment. We ensure that our third-party service provider takes extensive security measures in order to protect your personal information against loss, misuse, or alteration of the data.</p>
  
  <p className="mb-4">Our third-party service provider employs separation of environments and segregation of duties and have strict role-based access control on a documented, authorized, need-to-use basis. The stored data is protected and stored by application-level encryption. They enforce key management services to limit access to data.</p>
  
  <p className="mb-4">Furthermore, our registered third-party service providers provide hosting security – they use industry-leading anti-virus, anti-malware, intrusion prevention systems, intrusion detection systems, file integrity monitoring, and application control solutions.</p>
  
  {/* Changes in this Privacy Policy */}
  <h2 className="text-2xl font-bold mb-4">Changes in this Privacy Policy</h2>
  <p className="mb-4">We reserve the right to change, modify, add, or remove portions of this Privacy Policy at any time for any reason. In case, any changes are made in the Privacy Policy, we shall update the same on the Platform. Once posted, those changes are effective immediately, unless stated otherwise. We encourage you to periodically review this page for the latest information on our privacy practices. Continued access or use of the Services constitute your acceptance of the changes and the amended Privacy Policy.</p>
  
  {/* Accessing Your Information / Contacting Us */}
  <h2 className="text-2xl font-bold mb-4">Accessing Your Information / Contacting Us</h2>
  <p className="mb-4">At any point in time, users can choose to edit/modify or delete/withdraw any Personal Information shared for the use of the Platform. Please note that deleting or withdrawing information may affect the Services we provide to you. In case of modification of Personal Information, users will be required to furnish supporting documents relating to change in Personal Information for the purpose of verification by the Company.</p>
  
  {/* Your Privacy Controls */}
  <h2 className="text-2xl font-bold mb-4">Your Privacy Controls</h2>
  <p className="mb-4">You have certain choices regarding the information we collect and how it is used:</p>
  <ul className="list-disc list-inside mb-4">
    <li>Device-level settings: Your device may have controls that determine what information we collect. For example, you can modify permissions on your Android device for access to Camera or Audio permissions.</li>
    <li>Delete the App from your device</li>
    <li>... (continue the list as per your provided text)</li>
  </ul>
</div>

<div className="container mx-auto px-4 py-8">
  {/* Security Precautions */}
  <h2 className="text-2xl font-bold mb-4">Security Precautions</h2>
  <p className="mb-4">The Platform intends to protect your information and to maintain its accuracy as confirmed by you. We implement reasonable physical, administrative and technical safeguards to help us protect your information from unauthorized access, use and disclosure. For example, we encrypt all information when we transmit over the internet. We also require that our registered third-party service providers protect such information from unauthorized access, use and disclosure. Our Platform has stringent security measures in place to protect the loss, misuse and alteration of information under control. We endeavour to safeguard and ensure the security of the information provided by you. We use Secure Sockets Layers (SSL) based encryption, for the transmission of the information, which is currently the required level of encryption in India as per applicable law...</p>

  {/* Links to Other Sites */}
  <h2 className="text-2xl font-bold mb-4">Links to Other Sites</h2>
  <p className="mb-4">Our Platform links to other websites that may collect information about you. We are not responsible for the privacy practices or the content of those linked websites. With this Policy we are only addressing the disclosure and use of data collected by Us. If You visit any websites through the links on the Website, please ensure You go through the privacy policies of each of those websites. Their data collection practices, and their policies might be different from this Policy and We do not have control over any of their policies neither do we have any liability in this regard.</p>

  {/* Your Consent */}
  <h2 className="text-2xl font-bold mb-4">Your Consent</h2>
  <p className="mb-4">By using the Platform and by providing your information, you consent to the collection, sharing, disclosure and usage of the information that you disclose on the Platform in accordance with this Privacy Policy. If we decide to change our Privacy Policy, we will post those changes on this page so to make you aware of the information we collect, how we use it, and under what circumstances we share and disclose it.</p>

  {/* Grievance Officer */}
  <h2 className="text-2xl font-bold mb-4">Grievance Officer</h2>
  <p className="mb-4">In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below for your reference:</p>
  <p className="mb-4">Name: Bakulesh Rane</p>
  <p className="mb-4">Address: Aaji Ajoba Udayan, Maruti Nagar, Ashokan, Dahisar East, Mumbai 400 068</p>
  <p className="mb-4">Contact: 9619001470</p>
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
