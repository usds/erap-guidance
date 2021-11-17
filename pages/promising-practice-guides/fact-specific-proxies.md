---
layout: default-one-col
permalink: /promising-practices/fact-specific-proxies/
section: promising-practices
sidenav: programs
title: Using Fact-Specific Proxies to Simplify Documentation Requirements
---

<p>
  For applicants to be eligible for rental assistance, they must meet income criteria. While self-attestation alone is available during the COVID-19 crisis, it is not the only tool a grantee can use to simplify income verification --- per <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4">FAQ #4</a>:
</p>

<blockquote class="usa-intro era-guidance__blockquote">
  A grantee may rely on a written attestation from the applicant as to household income if the grantee also uses any reasonable fact-specific proxy for household income, such as reliance on data regarding average incomes in the household’s geographic area.
</blockquote>

<p>
  By using information from the application to find facts about the probable income of applicants, grantees can simplify their applications, reduce processing time, and help more households avoid eviction and housing instability.
</p>

<h2>Advantages to using this practice</h2>

<h3>It can simplify your application process to reduce burden on low-income applicants</h3>
<p>
  If a program has the ability to customize their application, they can use the address information provided by an applicant to qualify the applicant via the proxy and <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/example-application-screens%23income-fact-specific-proxy">present self-attestation as a first option</a>, instead of requesting documentation and then falling-back to self-attestation.
</p>

<h3>It can reduce your application processing time</h3>
<p>
  The Kentucky Housing Corporation was able to clear out a significant backlog of applications that lacked complete income documentation thereby improving their monthly total of assistance from $9,784,364 in September to $18,296,443 in October, a remarkable 87% increase.
</p>
<p>
  Grantees such as Indiana and Washington State are integrating proxies into their application processing workflows so that application processors will see that a grantee is from a qualified area and can skip follow-ups on income documentation. This cuts down on application processing time and the back-and-forth involved with following up with applicants to get specific documents.
</p>

<h3>It eliminates the need to re-verify income</h3>
<p>
  As explained in the <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies">Guidelines for fact-specific proxies</a>, by using a fact-specific proxy that supports self-attestation, there is no need to collect additional documentation three months after the first application.
</p>

<h2>Steps to take</h2>

<h3>Income proxy</h3>
<p>
  To develop and use an income proxy, a grantee will need to do the following:
</p>

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading era-guidance-process-list__heading">
      Determine a <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies#determining-a-geographic-area-for-your-proxy">reasonable geographic area</a> (e.g., census tract, ZIP code, districts, etc.)
    </h4>
    <p>
      Many grantees, such as Virginia, Washington, and Kentucky, have built their proxies around ZIP Codes. Most of these are using census-tract level data to derive facts at the level of ZIP Codes, and then use ZIP-Code-level data as a part of their application review process to simplify deployment.
    </p>
    <p>
      In Kentucky, in instances where a ZIP Code spans two or more counties, the ZIP Code was associated with the county in which a majority of the ZIP Code’s population lives.
    </p>
    <p>
      Grantees such as Maricopa County have built systems that allow them to use census tract and block data directly, which offers greater granularity than ZIP Codes.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading era-guidance-process-list__heading">
      <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies#finding-data-sources">Find data sources</a> that offer population-level income data for your geographic area
    </h4>
    <p>
      Grantees such as Kentucky and Washington rely on census data from tables such as B19013 for median area incomes at the census-tract or ZIP Code-Tabulation-Area level.
    </p>
    <p>
      The state of Indiana is doing interesting work by partnering with local utility companies to obtain data about utility arrears, which they combine with HUD Qualified Census Tracts to determine income eligibility (via the qualified census tracts) and acute need (via the arrears data).
    </p>
    <p>
      The state of Oregon is using 5-Year American Community Survey (ACS) data from the U.S. Census Bureau. When possible, their proxy will evaluate median renter household income, rather than the median income of all households in the ZIP Code. When there is no estimate for median renter income in the ACS data, the median income of all households will be used.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading era-guidance-process-list__heading">
      Implement a <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies#performing-address-lookups">technique for looking up addresses</a> of applicants within your defined geographic areas
    </h4>
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-7">
        <p>
          In Phoenix, AZ the Maricopa Association of Governments designed a census block map specifically to identify census blocks with high needs. The map allows a case worker to look up an address and determine if that address sits within a Census Block Group where 60% or more of the population is below 80% AMI of Maricopa County.
        </p>
      </div>
      <div class="tablet:grid-col-5">
        <a href="{{ site.baseurl }}/assets/img/phoenix-az-ami-tool.png" target="_blank" class="era-guidance-process-list__image-link">
          <img src="{{ site.baseurl }}/assets/img/phoenix-az-ami-tool.png" alt="A screenshot of the Phoenix, AZ AMI tool for looking up addresses to determine the AMI of a Census block group.">
        </a>
      </div>
    </div>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading era-guidance-process-list__heading">
      <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies#integrating-your-proxy-with-your-application">Integrate your new fact-specific proxy</a> with your system to help determine applicant eligibility
    </h4>
    <p>
      In Virginia, the Department of Housing and Community Development has published <a href="https://dhcd.virginia.gov/sites/default/files/Docx/rmrp/fact-specific-proxy-zip-codes.pdf">a simple PDF of ZIP codes</a> that an application processor can use to determine that a 3-person household is income eligible for assistance.
    </p>
  </li>
</ol>

<p>
  It is also important to train staff on how to use a proxy for income eligibility, to build in a feedback mechanism from staff to program administrators, and to iterate on the use of the proxy as the program evolves. In Kentucky, the program started using a fact-specific income proxy as a backup option for income eligibility and, after a month of monitoring, expanded the use of the proxy to be a primary method of determining income eligibility. 
</p>

<p>These steps are covered in detail in "<a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/service-design/fact-specific-proxies">Guidelines for fact-specific proxies</a>".</p> 

<h3>Categorical eligibility</h3>
<p>
  Many grantees are using an applicants’ participation in other government programs with similar income eligibility criteria as proxy. As defined in <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4">FAQ #4</a>, "grantees are permitted to rely on a determination letter from the government agency that verified the applicant’s household income or status as a low-income family, provided that the determination for such program was made on or after January 1, 2020." Programs include but are not limited to:
</p>
<ul>
  <li>Head Start Childhood Education Program</li>
  <li>Medicaid</li>
  <li>Public Housing or Section 8 (housing choice vouchers or project-based)</li>
  <li>Social Security</li>
  <li>Social Security Disability Insurance (SSDI)</li>
  <li>Supplemental Nutrition Assistance Program (SNAP)</li>
  <li>Supplemental Security Income (SSI)</li>
  <li>Temporary Assistance for Needy Families (TANF)</li>
</ul>

<h2>Considerations</h2>

<h3>Using both income and categorical eligibility proxies</h3>
<p>
  If you have successfully implemented one form of proxy in your program, consider implementing the other type of proxy. Having both may increase your ability to reach those in need.
</p>

<h3>Program flexibilities and prioritization</h3>
<p>
  A proxy allows a grantee to customize their program to make use of flexibilities and different prioritization schemes. Many programs are using a proxy in conjunction with self-attestation. In Phoenix, AZ the program decided that any applicant with income below 50% AMI would be automatically eligible for future rent payments of up to 3 months. In Philadelphia, PA the program has coupled self-attestation with a calculation to determine if an applicant is paying more than 30% of their income in rent to help ascertain housing instability and as one of several inputs to application prioritization.
</p>

<h3>Program integrity</h3>
<p>
  A proxy eases several burdens for programs and applicants, and it also opens up new opportunities to improve program integrity and equity. When designing a proxy, consider pulling in additional data about:
</p>
<ul>
  <li>Estimated number of renters in a given area</li>
  <li>Poverty rate in an area</li>
  <li>Median rents in an area</li>
  <li>Housing instability in an area</li>
  <li>Other signs of acute financial distress, such as Indiana’s utility arrearage data</li>
</ul>
<p>
  By using these additional data points as metrics to track applications against, programs can  become aware of potential fraud by noting too many applications coming from an area with few renters or seeing rents well above the expected range based on statistics in the area.
</p>

<h2>What’s next</h2>
<h3>Make sure to track how your proxy affects your program across multiple dimensions</h3>
<ul>
  <li>How is application processing time affected?</li>
  <li>Is money flowing to the places with the highest need?</li>
  <li>Are you serving more households without increasing program administrative burden?</li>
</ul>

<h3>Track your own metrics and feed your data back into your proxy</h3>
<p>
  As a program matures, it will have a wide source of data about what rents are in an area, what incomes are, and other data similar to what programs derive from census data. Analyzing data that’s been collected and verified through the application adjudication process can offer yet another source of data for a proxy and for program improvement overall.
</p>

<h2>How it connects to your program’s heath</h2>
<p>
  Grantees should note that the use of a fact-specific proxy for purposes of supporting the determination of applicants’ income eligibility is a strongly encouraged practice noted in the <a href="https://home.treasury.gov/system/files/136/1505-0266-Program-Improvement-Plan.pdf">Program Improvement Plan</a>. Especially for programs not yet allowing for self-attestation, a proxy can provide an additional factor in determining household eligibility that should increase the rate of assistance being provided.
</p>
