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


## Principles to keep in mind

* While a proxy provides reassurance about the probable truth of an applicant's self-attestation, it is the applicant's written attestation that in the end assures of of the truth of their stated income. A proxy enhances self-attestation but does not replace the need to collect a written attestation.
* The specific design of a proxy can be adjusted to the needs of your location; while we focus on Federal data sources and a system that would work generically for any locality, we also recognize that there are many ways to develop a valid and useful fact-specific income proxy.
* A proxy is one of several tools available to grantees to simplify the application process: Categorical eligibility, based on the use of other local, state, or federal government assistance programs, can and should be used as well; additionally, self-attestation alone is available and encouraged during this public health emergency. If, however, your program has determined it will not use self-attestation alone, a fact-specific proxy supporting self-attestation can provide a valuable middle-ground between requiring documentation for all applicants and self-attestation alone.


## An overview of developing a proxy

To develop and use a proxy, a grantee will need to do the following:

1. Determine a reasonable geographic area for determining incomes (e.g., census tract, ZIP code, districts, etc.)
2. Find data sets that offer population-level income data for your geographies
3. Implement a technique for looking up addresses of applicants within your defined geographic areas
4. Integrate your new lookups with your existing system for collecting income information and determining eligibility

Steps 1-3 feed into one another and may not be done precisely in the order presented below, but instead will likely be determined in conjunction with one another.

### Determining a geographic resolution for your proxy

The geographic area-size you choose for your fact-specific proxy will determine what data are available to you and what processing you will need to do on addresses to determine income facts. Assuming the use of U.S. Census data, [many geographies are available](https://www.census.gov/programs-surveys/geography/guidance.html), and census tracts offer a good default tradeoff between size, data availability, and data quality/noise. That said, locating households within particular census tracts requires more advanced geocoding, so using Census ZIP Code Tabulation Areas (ZCTAs) is a reasonable choice in areas where ZCTAs afford adequate precision for your program. There are also a variety of hybrids, depending on your team's technical capacity; a grantee could choose to use census tracts for analysis, but generate a list of qualifying USPS Zip Codes based on analysis an intersection of tracts and address zip codes. This hybrid approach would allow for a simpler application system in exchange for more data pre-processing when developing the proxy, which may be an attractive tradeoff.

Geographies other than those used by the U.S. Census are also possible and reasonable to use, assuming your locality is familiar with locally-used geographic divisions and has access to reliably-collected and analyzed data for them.

In picking a geography for your fact-specific proxy, the key is that program administrators and compliance officials understand the tradeoffs between the size of the population in the areas, the income diversity of the population within the area, and the implications of your choices for launching a fact-specific proxy. Once your team has made a choice, document it along with your reasoning and apply it consistently for all applicants.

### Finding a data source

The facts for your proxy will come from the data you use to develop it. Data should come from government agencies and be reasonably recent. As with geographies, the U.S. Census provides a variety of valuable sources, such as detailed tables from its 1 and 5 year American Community Surveys. For example, a reasonable proxy could use median renter incomes from detailed table B25119 (variable `B25119_003E`) for the 2019 5-year estimates from the American Community Survey to verify that most renters in a geographic area fall under the 80% area median income for a household limit. Data such as that provided in B25119 offers a fact about most residents of a geography, and when compared to the income limits described in the act and [FAQ #4](https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program/faqs#4), provide assurance that applicants from a given geography probably (statistically) qualify for the program and thus can self-attest to their income without further income documentation. Other similar census tables are also acceptable, such as the overall area median income (for both renters and owners) from ACS 2019 5-year estimates detailed table B19013.

Alternatively, a grantee could construct a proxy using the Department of Housing and Urban Development's (HUD's) Comprehensive Housing Affordability Strategy (CHAS) for 2014-2018 data or HUD's Qualified Census Tracts and Difficult Development Areas for 2022 data to determine whether an adequate percentage of the population in a given geography qualifies for assistance. For example, a grantee could reasonably develop a proxy that uses the fact that an applicant lives in a HUD Qualified Census Tract to determine that applicants from a qualified tract probably (statistically) qualify for the program and thus can self-attest to their income without further income documentation.

Grantees are not limited to federal data in designing a proxy; if your state has data assets or products that given insight into incomes for an area or allow for modeling of the probably income for a participant on the basis of information provided in the application, these sources are permissable. As with picking a geography, treasury offers grantees flexibility in the precise data sources --- the key is that program administrators and compliance officials understand the predictive power and nature of the data, have well-considered reasons for their choices, and that the program documents its reasoning for its choices and applies them consistently to applicants once the proxy is deployed.

If a grantee is using a data source based on sampling, such as ACS detailed tables, there will also be sample error estimates included with the data. Because the error inversely correlates with sample size (that is, smaller samples will tend to have higher error), and any fact-specific proxy will rely on estimated data, it is acceptable to disregard the sample error in the interest of equity; when looking at all census tracts across the US, taking the margin-of-error into account when building a proxy will systematically disadvantage lower-population areas. That said, grantees are welcome to do analysis on their specific geographic and determine an approach to error that is reasonable and equitable.

It is acceptable to combine multiple data sources for a variety of reasons, as long as it is done in a statistically valid manner. For example, if using median renter incomes from ACS table B25119, not all areas have data at the census-tract level. As such, it is reasonable to fall back to a larger section of the population, such as area median income from table B19013. Similarly, a grantee could combine multiple census tables to gain access to features beyond just location to forecast an income for an applicant based on other data in their application. While the design of a more sophisticated proxy using multiple tables is beyond the scope of this document, a grantee designing such a model will need to carefully test for systematic bias along any protected categories and carefully weigh the additional predictive power against the risk of model bias compared to a simpler model based purely on location. 

### Address lookups

Once a grantee has selected a geographic resolution and data source(s), they will need to devise a method for determining which geographic area a given an applicant falls into. 

If a grantee is using ZCTA geographic areas, this can be done reasonably by comparing a Zip Code to a table of data indexed by ZCTA; while Zip Codes and ZCTAs are not identical, for the purposes of a fact-specific proxy, a ZCTA-based fact provides adequate accuracy to allow for self-attestation. Similarly, if a grantee is using a local geography that maps directly to some aspect of a postal address (such as city or town), the lookups can be done directly against the fact data.

If a grantee is using census tracts or a geography that cannot be directly extracted from the applicant's address, the grantee will need to geocode addresses. A variety of commercial and open source products exist to geocode addresses, and all have tradeoffs in terms of accuracy, cost, and perform differently in different regions. The Federal Government provides two products that may help:

* The U.S. Census Bureau provides a [Census Geocoder that returns census geographies for U.S. addresses](https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html).
* The U.S. Department of Transportation provides the [National Address Database](https://www.transportation.gov/gis/national-address-database/national-address-database-0), which provides latitude and longitude coordinates for more than 61 million address; these coordinates can be located within a variety of geographies to lookup facts for addresses.

While we cannot offer a truly general analysis of the tradeoffs of various geocoding options here, Treasury acknowledge 

## An example proxy

Working from the above, we can outline an example of a proxy that would be suitable for any grantee to use. As indicated above, there are a variety of choices a grantee can make while designing a fact-specific proxy, and so this is not the **only** reasonable proxy design. It is, however, an option that can be used or adapted by grantees who wish to simplify their application process using Federal data and resources.

For this example, we make the following data choices:

- **Geographic resolution:** Census Tract; as described above, the tract level gives us a good tradeoff between specificity and data quality
- **Data Sources**: ACS 2019 5-Year Estimate table B25119 ("MEDIAN HOUSEHOLD INCOME THE PAST 12 MONTHS BY TENURE") for applicants where data exists; where data do not exist for a tract, backfill with ACS 2019 5-Year Estimate table B19013 ("MEDIAN HOUSEHOLD INCOME IN THE PAST 12 MONTHS (IN 2019 INFLATION-ADJUSTED DOLLARS").
  - **Margin of error strategy** Accept estimates as is, without doing further analysis on margin of error
- **Address Lookups**: For all areas covered by DOT'S NAD, perform lookups there to determine address coordinates; perform geospatial queries to locate address within a census tract using [Census TIGER line/shapefiles](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2019.html). For addresses not covered by the NAD, query the [Census Geocoder](https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html) for tract information.

Using the above, we can lookup the median renter income (or median income, if unavailable) for a given address. We can compare this value to the 80% income limits defined in FAQ #4 for the area an address falls in. If the median renter income falls below the 80% guideline Area Median Income, the proxy would return this fact and we would accept self-attestation immediately for the applicant.