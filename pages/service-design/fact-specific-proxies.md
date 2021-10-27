---
layout: default-one-col
permalink: /service-design/fact-specific-proxies/
section: service-design
sidenav: programs
title: Guidelines for fact-specific proxies
---

<p class="usa-intro">
  It is important that the application process be as simple for renters as possible (within the program's guidelines) to ensure that renters in need are able to apply for assistance without getting deterred by documentation they might not have.  
</p>
<p>
  To help accomplish these goals, Treasury has prepared these guidelines in conjunction with the <a href="https://usds.gov/">U. S. Digital Service</a> to help Emergency Rental Assistance (ERA) program grantees with developing fact-specific proxies for verifying applicant income, as described in <a href="https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4">FAQ #4</a>.
</p>

## An overview of developing a proxy

To develop and use a proxy, a grantee will need to do the following:

1. [Determine a reasonable geographic resolution](#determining-a-geographic-resolution-for-your-proxy) for determining incomes (e.g., census tract, ZIP code, districts, etc.)
2. [Find data sources](#finding-data-sources) that offer population-level income data for your geographies
3. Implement a [technique for looking up addresses](#performing-address-lookups) of applicants within your defined geographic areas
4. [Integrate your new fact-specific proxy](#integrating-your-proxy-with-your-application) with your existing system for collecting applicant information and determining eligibility

Steps 1-3 feed into one another and may not be done precisely in the order presented below, but instead will likely be determined in conjunction with one another.

### An example proxy

As a working example to illustrate the sorts of specific choices a grantee could make in designing a fact-specific proxy, consider the following design that would be suitable for any grantee to use. **There are a variety of choices a grantee can make while designing a fact-specific proxy**, and so this is not the *only* reasonable proxy design. It is, however, an option that can be used or adapted by grantees who wish to simplify their application process using Federal data and resources. After the example, we will discuss the thinking that goes into making each choice for a fact-specific proxy.

For this example, we make the following data choices:

- **[Geographic resolution](#determining-a-geographic-resolution-for-your-proxy):** Use census tracts; as discussed in [Determining a geographic resolution for your proxy](#determining-a-geographic-resolution-for-your-proxy), the tract level gives us a good tradeoff between specificity and data quality
- **[Data Sources](#finding-a-data-source):** Use median renter data from U.S. Census American Community Survey (ACS) 2019 5-Year estimates table B25119 for applicants where data exists; these data are specific to the population we are working with and will best reflect their incomes. 
  - Where data do not exist for a tract, backfill with median overall incomes for tracts from ACS 2019 5-Year estimates table B19013.
  - **[Margin of error strategy](#moe):** Accept the ACS estimate values as they are, without doing further analysis on margin of error, to avoid penalizing lower-population areas
- **[Address lookups](#address-lookups)** For all areas covered by the U.S. Department of Transportation (DOT) National Address Database (NAD), perform lookups to determine address coordinates; using these coordinates, perform geospatial queries to locate address within a census tract using [Census TIGER line/shapefiles](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2019.html). 
  - For addresses not covered by the NAD, query the [Census Geocoder](https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html) for tract information.

Using the above, we can lookup the median renter income (or median income, if necessary) for a given address's census tract. We can compare this value to the 80% Area Median Income limits defined in [FAQ #4](https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4) and enumerated through the [Department of Housing and Urban Development's (HUD's) Income Limits](https://www.huduser.gov/portal/datasets/il.html) data for the area an address falls in. If the median renter income falls below the 80% guideline Area Median Income, the proxy would return this fact and we would accept self-attestation immediately for the applicant. Because the attestation is supported by a fact-specific proxy, we would not need to follow-up for additional documentation after three months, as we would in a pure-self-attestation scenario.

## Principles to keep in mind while designing a proxy

- While a proxy provides reassurance about the probable truth of an applicant's self-attestation, **it is the applicant's written attestation that in the end assures us of the truth of their stated income.** A proxy enhances self-attestation but does not replace the need to collect a written attestation.
- The specific design of a proxy can be adjusted to the needs of your location; while we focus on Federal data sources and a system that would work generically for any locality, we also recognize that there are many ways to develop a reasonable fact-specific income proxy.
- A proxy is one of several tools available to grantees to simplify the application process: 
  - Categorical eligibility, based on the use of other local, state, or federal government assistance programs, can and should be used as well; and
  - self-attestation alone is available and encouraged during this public health emergency.

If, however, your program has determined it will not use self-attestation alone, a fact-specific proxy supporting self-attestation can provide a valuable middle-ground between requiring documentation for all applicants and self-attestation alone. Additionally, by using a fact-specific proxy that supports self-attestation, there is no need to collection additional documentation three months after the first application.


### Determining a geographic resolution for your proxy

The geographic resolution (or area) you choose for your fact-specific proxy will determine which data are available to you and what processing you will need to do on addresses to determine income facts. Assuming the use of U.S. Census data, [many geographies are available](https://www.census.gov/programs-surveys/geography/guidance.html). **Census tracts offer a good default** tradeoff between size, data availability, and data quality/noise. The census does offer smaller units, such as block groups; however, the sample-size of these units makes further subdivisions (i.e., renters/owners) extremely noisy. In general, we hope to strike a balance between specificity (so using smaller geographic areas), data quality, data availability, and difficulty in implementation.

For some grantees, census tracts may be technologically burdensome to use, since locating households within particular census tracts requires more advanced geocoding. In these cases, USPS ZIP Codes (or a related geography) can make integrating the proxy simpler with an application system. In these cases, using Census ZIP Code Tabulation Areas (ZCTAs) is a reasonable choice in areas where ZCTAs afford adequate precision for your program. A grantee may also do their own analysis of census-tract data to local ZIP Codes, depending on the team's technical capacity. For example, a grantee could choose to use census tracts for analysis, but generate a list of qualifying USPS Zip Codes based on analysis an intersection of tracts and ZIP Codes (deriving the ZIP Code's geography from addresses with that ZIP Code, for example) in the grantee's jurisdiction. This hybrid approach would allow for a simpler application system in exchange for more data pre-processing when developing the proxy, which may be an attractive tradeoff.

Geographies other than those used by the U.S. Census are also possible and reasonable to use (e.g., school districts, state legislative districts, etc.), assuming your locality is familiar with locally-used geographic divisions and has access to reliably-collected and analyzed data for them.

In picking a geographic resolution for your fact-specific proxy, the key is that program administrators and compliance officials understand the tradeoffs between the size of the population in the areas, the income diversity of the population within the area, and the implications of your choices for launching a fact-specific proxy. Once your team has made a choice, document it along with your reasoning and apply it consistently for all applicants.

### Finding data sources

The facts for your proxy will come from the data you use to develop it. **Data should come from government agencies (federal or local) or other reputable entities (e.g., universities, utility companies, etc.) and be reasonably recent.** As with geographies, the U.S. Census provides a variety of valuable sources, such as detailed estimate tables from its 1 and 5 year American Community Surveys. 

In our example, we use median renter incomes from detailed table B25119 (variable `B25119_003E`) for the 2019 5-year estimates from the American Community Survey to verify that most renters in a geographic area fall under the 80% area median income for a household limit. Data such as that provided in B25119 offers a fact about most residents of a geography, and when compared to the income limits described in [FAQ #4](https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4), provide assurance that applicants from a given geography probably (statistically) qualify for the program and thus can self-attest to their income without further income documentation. Other similar census tables are also acceptable, such as the overall area median income (for all residents) from ACS 2019 5-year estimates detailed table B19013.

Alternatively, a grantee could construct a proxy using the Department of Housing and Urban Development (HUD) data, such as [HUD's Comprehensive Housing Affordability Strategy (CHAS)](https://www.huduser.gov/portal/datasets/cp.html) for 2014-2018 data or HUD's [Qualified Census Tracts and Difficult Development Areas](https://www.huduser.gov/portal/datasets/qct.html) for 2022 data to determine whether an adequate percentage of the population in a given geography qualifies for assistance. For example, a grantee could reasonably develop a proxy that uses the fact that an applicant lives in a HUD Qualified Census Tract to determine that applicants from a qualified tract probably (statistically) qualify for the program and thus can self-attest to their income without further income documentation.

Grantees are not limited to federal data in designing a proxy; if your state has data assets or products that give insight into incomes for an area or allow for modeling of the probable income or financial hardship for a participant on the basis of information provided in the application, these sources are permissable. As with picking a geography, treasury offers grantees flexibility in the precise data sources --- the key is that program administrators and compliance officials understand the predictive power and nature of the data, have well-considered reasons for their choices, and that the program documents its reasoning for its choices and applies them consistently to applicants once the proxy is deployed.

<a name="moe"></a>If a grantee is using a data source based on sampling, such as ACS detailed tables, there will also be sample error estimates included with the data. Because the error inversely correlates with sample size (that is, smaller samples will tend to have higher error), and any fact-specific proxy will rely on estimated data, it is acceptable to disregard the sample error in the interest of equity; when looking at all census tracts across the US, taking the margin-of-error into account when building a proxy will systematically disadvantage lower-population areas. That said, grantees are welcome to do analysis on their specific geographic areas and determine an approach to error that is reasonable and equitable.

It is acceptable to combine multiple data sources for a variety of reasons, as long as it is done in a statistically valid manner. For example, if using median renter incomes from ACS table B25119, not all areas have data at the census-tract level. As such, it is reasonable to fall back to a larger section of the population, such as area median income from table B19013. A grantee may also combine income data, such as HUD Qualified Census Tracts, with other signs of area economic distress from local utilities, tax collections, or other locally available data sources, to determine geographic areas that are experiencing acute financial hardship. Similarly, a grantee could combine multiple census tables to gain access to features beyond just location to forecast an income for an applicant based on other data in their application. While the design of a more sophisticated proxy using multiple tables is beyond the scope of this document, a grantee designing such a model will need to carefully test for systematic bias along any protected categories and carefully weigh the additional predictive power against the risk of model bias compared to a simpler model based purely on location.

As with picking a geographic resolution, there are a variety of possible designs that are acceptable, from the relatively simple one in the example to more sophisticated models based on multiple data sources. Grantees are free to tailor their data sources and methodology based on their circumstances, provided their methodology follows the spirit of these guidelines and that it is documented and applied consistently.

### Performing address lookups

Once a grantee has selected a geographic resolution and data source(s), they will need to devise a method for determining which geographic area a given an applicant falls into. 

If a grantee is using ZCTA geographic areas, this can be done reasonably by comparing a ZIP Code to a table of data indexed by ZIP Code. Similarly, if a grantee is using a local geography that maps directly to some aspect of a postal address (such as city or town), the lookups can be done directly against the fact data.

If a grantee is using census tracts or a geography that cannot be directly extracted from the applicant's address, the grantee will need to geocode addresses. A variety of commercial and open source products exist to geocode addresses, and all have tradeoffs in terms of accuracy, cost, and regional performance. The Federal Government provides two products that may help:

* The U.S. Census Bureau provides a [Census Geocoder that returns census geographies for U.S. addresses](https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html).
* The U.S. Department of Transportation provides the [National Address Database](https://www.transportation.gov/gis/national-address-database/national-address-database-0), which provides latitude and longitude coordinates for more than 61 million address; these coordinates can be located within a variety of geographies to lookup facts for addresses.

### Integrating your proxy with your application

Once you have collected your data and have a technique for determining facts from your data about applicants from their addresses, you have a fact-specific proxy to use in your application process. Although the specific integration will depend on your proxy design and your application itself, generally a grantee will look up the income for the applicant based on where they live and compare it to the 80% Area Median Income (Area Median Income) described in [FAQ #4](https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4). 

Using our example proxy from the beginning, we would 

1. use an applicant's address to locate their census tract, then
2. find the median income of renters in that tract. 

If the median renter income in the tract falls below the 80% AMI limit for the area, we can say that the proxy has returned that fact and allow the applicant to use self-attestation for their income. This fact will support the use of self-attestation, and the applicant should be presented the option to self-attest to income without providing additional documentation. Because the attestation is supported by the fact-specific proxy, there is no need to collect additional income documentation three months after the attestation, in contrast to self-attestation alone.

The precise mechanism for accessing the proxy data will depend on your application itself. Some options include

- building a lookup table of addresses or ZIP Codes for the application to directly access to lookup proxy-facts during the application process
- making a web service that can ingest an address, perform any geocoding and lookups, and return a fact to the application, to smooth the process for end users
- creating lookup tables in spreadsheets for telephone operators, case workers, and application reviewers to use while entering or approving applications

If you are interested in technical support integrating a proxy with your application, please contact **INSERT MAILTO HERE**.
