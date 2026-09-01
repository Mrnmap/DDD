const redirects = [
  {
    source: "/ar/media-centre/press-releases",
    permanent: true,
    destination: "/ar/newsroom",
  },
  {
    source: "/en/media-centre/press-releases",
    permanent: true,
    destination: "/en/newsroom",
  },
  {
    source: "/about",
    permanent: true,
    destination: "/en/our-leadership",
  },
  {
    source: "/about/h-h-sheikh-ahmed-bin-saeed-al-maktoum",
    permanent: true,
    destination: "/en/our-leadership",
  },
  {
    source: "/about/khalifa-al-zaffin",
    permanent: true,
    destination: "/en/our-leadership",
  },
  {
    source: "/ar-ae/about",
    permanent: true,
    destination: "/ar/our-leadership",
  },
  {
    source: "/ar-ae/about/h-h-sheikh-ahmed-bin-saeed-al-maktoum",
    permanent: true,
    destination: "/ar/our-leadership",
  },
  {
    source: "/ar-ae/about/khalifa-al-zaffin",
    permanent: true,
    destination: "/ar/our-leadership",
  },
  {
    source: "/ar-ae/business-setup-licensing/license",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/business-setup-licensing/overview",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/business-setup-licensing/professional-license",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/careers-why-join-us",
    permanent: true,
    destination: "/ar/our-leadership",
  },
  {
    source: "/ar-ae/commercial/contact",
    permanent: true,
    destination: "/ar/contact-us-page",
  },
  {
    source: "/ar-ae/commercial/contact/faq",
    permanent: true,
    destination: "/ar/faqs",
  },
  {
    source: "/ar-ae/commercial/investments",
    permanent: true,
    destination: "/ar/work/commercial-property",
  },
  {
    source: "/ar-ae/commercial/investments/land-plots",
    permanent: true,
    destination: "/ar/work/commercial-property",
  },
  {
    source: "/ar-ae/commercial/offices",
    permanent: true,
    destination: "/ar/work/commercial-property/offices",
  },
  {
    source: "/ar-ae/commercial/offices/business-center",
    permanent: true,
    destination: "/ar/work/commercial-property/business-centre",
  },
  {
    source: "/ar-ae/commercial/offices/business-park",
    permanent: true,
    destination: "/ar/work/commercial-property/business-park",
  },
  {
    source: "/ar-ae/commercial/overview",
    permanent: true,
    destination: "/ar/work/commercial-property",
  },
  {
    source: "/ar-ae/commercial/retail",
    permanent: true,
    destination: "/ar/work/commercial-property/retail",
  },
  {
    source: "/ar-ae/commercial/retail/business-park-retail",
    permanent: true,
    destination: "/ar/work/commercial-property/retail",
  },
  {
    source: "/ar-ae/commercial/retail/sakany-square-mall",
    permanent: true,
    destination: "/ar/work/commercial-property/retail",
  },
  {
    source: "/ar-ae/commercial/retail/the-pulse-retail",
    permanent: true,
    destination: "/ar/work/commercial-property/retail",
  },
  {
    source: "/ar-ae/contact-us",
    permanent: true,
    destination: "/ar/contact-us-page",
  },
  {
    source: "/ar-ae/customer-portal",
    permanent: true,
    destination: "https://dubaisouth.my.site.com/portal",
  },
  {
    source: "/ar-ae/forms/forms-and-templates",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/forms/gov-free-zone-services",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/forms/planning-and-development",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/freezone/contact",
    permanent: true,
    destination: "/ar/contact-us-page",
  },
  {
    source: "/ar-ae/freezone/contact/faq",
    permanent: true,
    destination: "/ar/faqs",
  },
  {
    source: "/ar-ae/freezone/employment-dispute-center",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/freezone/eservices-portals",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/freezone/information-request",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/freezone/overview",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/laws-and-regulations/circulars-announcements",
    permanent: true,
    destination: "/ar/Circulars",
  },
  {
    source: "/ar-ae/laws-and-regulations/legislations",
    permanent: true,
    destination: "/ar/policy",
  },
  {
    source: "/ar-ae/laws-and-regulations/policies-guidelines-manuals",
    permanent: true,
    destination: "/ar/policy",
  },
  {
    source: "/ar-ae/laws-and-regulations/regulations-tariff",
    permanent: true,
    destination: "/ar/regulations-and-tariff",
  },
  {
    source: "/ar-ae/logistics/clients-and-stake-holders",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/clients-and-stake-holders/clients",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/clients-and-stake-holders/stake-holders",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/ez-dubai",
    permanent: true,
    destination: "/ar/work/logistics/ezdubai",
  },
  {
    source: "/ar-ae/logistics/ez-dubai/master-plan",
    permanent: true,
    destination: "/ar/work/logistics/ezdubai",
  },
  {
    source: "/ar-ae/logistics/ez-dubai/overview",
    permanent: true,
    destination: "/ar/work/logistics/ezdubai",
  },
  {
    source: "/ar-ae/logistics/getting-started",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/getting-started/licensing",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/getting-started/planning-and-permission",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/getting-started/staff-accomodation",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/knowledge-centre",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/knowledge-centre/faq",
    permanent: true,
    destination: "/ar/faqs",
  },
  {
    source: "/ar-ae/logistics/knowledge-centre/research",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/operations",
    permanent: true,
    destination: "/ar/work/logistics/operations",
  },
  {
    source: "/ar-ae/logistics/operations/free-zone",
    permanent: true,
    destination: "/ar/work/logistics/operations",
  },
  {
    source: "/ar-ae/logistics/operations/services",
    permanent: true,
    destination: "/ar/work/logistics/operations",
  },
  {
    source: "/ar-ae/logistics/overview-and-masterplan",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/build-to-suit",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/office-solutions",
    permanent: true,
    destination: "/ar/work/commercial-property/offices",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/plots",
    permanent: true,
    destination: "/ar/work/logistics",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/ware-houses",
    permanent: true,
    destination: "/ar/work/logistics/warehouse",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/ware-houses/multi-tenant-facility/freight-complex",
    permanent: true,
    destination: "/ar/work/logistics/warehouses/freight-complex",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/ware-houses/multi-tenant-facility/logistics-complex",
    permanent: true,
    destination: "/ar/work/logistics/warehouses/freight-complex",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/ware-houses/single-user-facility/freight-house",
    permanent: true,
    destination: "/ar/work/logistics/warehouses/freight-house",
  },
  {
    source: "/ar-ae/logistics/solutions-and-properties/ware-houses/single-user-facility/logistics-house",
    permanent: true,
    destination: "/ar/work/logistics/warehouses/freight-house",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals",
    permanent: true,
    destination: "/ar/work/mbrah",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/business-aviation",
    permanent: true,
    destination: "/ar/work/mbrah/business-aviation",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/education-and-training",
    permanent: true,
    destination: "/ar/work/mbrah/education-and-training",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/education-and-training/dynamic-advanced-training-centre",
    permanent: true,
    destination: "/ar/work/mbrah/education-and-training",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/education-and-training/emirates-flights-training-academy",
    permanent: true,
    destination: "/ar/work/mbrah/education-and-training",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/mro",
    permanent: true,
    destination: "/ar/work/mbrah/mro",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/business-verticals/offices-and-retail",
    permanent: true,
    destination: "/ar/work/mbrah/offices-and-retail",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/overview",
    permanent: true,
    destination: "/ar/work/mbrah",
  },
  {
    source: "/ar-ae/mbr-aerospace-hub/overview/masterplan",
    permanent: true,
    destination: "/ar/work/mbrah",
  },
  {
    source: "/ar-ae/media-center/corporate-fact-sheet",
    permanent: true,
    destination: "/ar/media-centre/press-releases",
  },
  {
    source: "/ar-ae/media-center/faq",
    permanent: true,
    destination: "/ar/faqs",
  },
  {
    source: "/ar-ae/media-center/overview",
    permanent: true,
    destination: "/ar/media-centre/events",
  },
  {
    source: "/ar-ae/media-center/overview/events",
    permanent: true,
    destination: "/ar/media-centre/events",
  },
  {
    source: "/ar-ae/media-center/overview/news-and-press-release",
    permanent: true,
    destination: "/ar/media-centre/press-releases",
  },
  {
    source: "/ar-ae/privacy-policy",
    permanent: true,
    destination: "/ar/policy",
  },
  {
    source: "/ar-ae/procurement",
    permanent: true,
    destination: "/ar",
  },
  {
    source: "/ar-ae/residential/current-projects",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/current-projects/pulse-townhouses",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/current-projects/pulse-villas",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/current-projects/rent-to-own",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/current-projects/sakany",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/current-projects/the-pulse-residentials",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/crew-village",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/parklane",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/sakany-one",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/the-grove",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/the-pulse-hospitality",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/future-projects/the-pulse-mall",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/overview",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/residential/overview/residential-district",
    permanent: true,
    destination: "/ar/live",
  },
  {
    source: "/ar-ae/terms-of-use",
    permanent: true,
    destination: "/ar/policy",
  },
  {
    source: "/business-setup-licensing/license",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/business-setup-licensing/overview",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/business-setup-licensing/professional-license",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/careers-why-join-us",
    permanent: true,
    destination: "/en/our-leadership",
  },
  {
    source: "/commercial/contact",
    permanent: true,
    destination: "/en/contact-us-page",
  },
  {
    source: "/commercial/contact/faq",
    permanent: true,
    destination: "/en/faqs",
  },
  {
    source: "/commercial/investments/land-plots",
    permanent: true,
    destination: "/en/work/commercial-property",
  },
  {
    source: "/commercial/offices/business-center",
    permanent: true,
    destination: "/en/work/commercial-property/business-centre",
  },
  {
    source: "/commercial/offices/business-park",
    permanent: true,
    destination: "/en/work/commercial-property/business-park",
  },
  {
    source: "/commercial/overview",
    permanent: true,
    destination: "/en/work/commercial-property",
  },
  {
    source: "/commercial/retail/business-park-retail",
    permanent: true,
    destination: "/en/work/commercial-property/retail",
  },
  {
    source: "/commercial/retail/sakany-square-mall",
    permanent: true,
    destination: "/en/work/commercial-property/retail",
  },
  {
    source: "/commercial/retail/the-pulse-retail",
    permanent: true,
    destination: "/en/work/commercial-property/retail",
  },
  {
    source: "/contact-us",
    permanent: true,
    destination: "/en/contact-us-page",
  },
  {
    source: "/customer-portal",
    permanent: true,
    destination: "https://dubaisouth.my.site.com/portal",
  },
  {
    source: "/forms/forms-and-templates",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/forms/gov-free-zone-services",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/forms/planning-and-development",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/freezone/contact",
    permanent: true,
    destination: "/en/contact-us-page",
  },
  {
    source: "/freezone/contact/faq",
    permanent: true,
    destination: "/en/faqs",
  },
  {
    source: "/freezone/employment-dispute-center",
    permanent: true,
    destination: "https://dubaisouth.my.salesforce-sites.com/businessactivities/DS_EmploymentDisputePage",
  },
  {
    source: "/en/freezone/employment-dispute-center",
    permanent: true,
    destination: "https://dubaisouth.my.salesforce-sites.com/businessactivities/DS_EmploymentDisputePage",
  },
  {
    source: "/ar/freezone/employment-dispute-center",
    permanent: true,
    destination: "https://dubaisouth.my.salesforce-sites.com/businessactivities/DS_EmploymentDisputePage",
  },
  {
    source: "/freezone/eservices-portals",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/freezone/information-request",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/freezone/overview",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/laws-and-regulations/circulars-announcements",
    permanent: true,
    destination: "/en/Circulars",
  },
  {
    source: "/laws-and-regulations/legislations",
    permanent: true,
    destination: "/en/policy",
  },
  {
    source: "/laws-and-regulations/policies-guidelines-manuals",
    permanent: true,
    destination: "/en/policy",
  },
  {
    source: "/laws-and-regulations/regulations-tariff",
    permanent: true,
    destination: "/en/regulations-and-tariff",
  },
  {
    source: "/logistics/clients-and-stake-holders/clients",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/clients-and-stake-holders/stake-holders",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/ez-dubai/master-plan",
    permanent: true,
    destination: "/en/work/logistics/ezdubai",
  },
  {
    source: "/logistics/ez-dubai/overview",
    permanent: true,
    destination: "/en/work/logistics/ezdubai",
  },
  {
    source: "/logistics/getting-started/licensing",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/getting-started/planning-and-permission",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/getting-started/staff-accomodation",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/knowledge-centre/faq",
    permanent: true,
    destination: "/en/faqs",
  },
  {
    source: "/logistics/knowledge-centre/research",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/operations/free-zone",
    permanent: true,
    destination: "/en/work/logistics/operations",
  },
  {
    source: "/logistics/operations/services",
    permanent: true,
    destination: "/en/work/logistics/operations",
  },
  {
    source: "/logistics/overview-and-masterplan",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/solutions-and-properties",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/solutions-and-properties/build-to-suit",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/solutions-and-properties/office-solutions",
    permanent: true,
    destination: "/en/work/commercial-property/offices",
  },
  {
    source: "/logistics/solutions-and-properties/plots",
    permanent: true,
    destination: "/en/work/logistics",
  },
  {
    source: "/logistics/solutions-and-properties/ware-houses",
    permanent: true,
    destination: "/en/work/logistics/warehouse",
  },
  {
    source: "/logistics/solutions-and-properties/ware-houses/multi-tenant-facility/freight-complex",
    permanent: true,
    destination: "/en/work/logistics/warehouses/freight-complex",
  },
  {
    source: "/logistics/solutions-and-properties/ware-houses/multi-tenant-facility/logistics-complex",
    permanent: true,
    destination: "/en/work/logistics/warehouses/freight-complex",
  },
  {
    source: "/logistics/solutions-and-properties/ware-houses/single-user-facility/freight-house",
    permanent: true,
    destination: "/en/work/logistics/warehouses/freight-house",
  },
  {
    source: "/logistics/solutions-and-properties/ware-houses/single-user-facility/logistics-house",
    permanent: true,
    destination: "/en/work/logistics/warehouses/freight-house",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/business-aviation",
    permanent: true,
    destination: "/en/work/mbrah/business-aviation",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/education-and-training",
    permanent: true,
    destination: "/en/work/mbrah/education-and-training",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/education-and-training/dynamic-advanced-training-centre",
    permanent: true,
    destination: "/en/work/mbrah/education-and-training",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/education-and-training/emirates-flights-training-academy",
    permanent: true,
    destination: "/en/work/mbrah/education-and-training",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/mro",
    permanent: true,
    destination: "/en/work/mbrah/mro",
  },
  {
    source: "/mbr-aerospace-hub/business-verticals/offices-and-retail",
    permanent: true,
    destination: "/en/work/mbrah/offices-and-retail",
  },
  {
    source: "/mbr-aerospace-hub/overview",
    permanent: true,
    destination: "/en/work/mbrah",
  },
  {
    source: "/mbr-aerospace-hub/overview/masterplan",
    permanent: true,
    destination: "/en/work/mbrah",
  },
  {
    source: "/media-center/corporate-fact-sheet",
    permanent: true,
    destination: "/en/media-centre/press-releases",
  },
  {
    source: "/media-center/faq",
    permanent: true,
    destination: "/en/faqs",
  },
  {
    source: "/media-center/overview",
    permanent: true,
    destination: "/en/media-centre/events",
  },
  {
    source: "/media-center/overview/events",
    permanent: true,
    destination: "/en/media-centre/events",
  },
  {
    source: "/media-center/overview/news-and-press-release",
    permanent: true,
    destination: "/en/media-centre/press-releases",
  },
  {
    source: "/privacy-policy",
    permanent: true,
    destination: "/en/policy",
  },
  {
    source: "/procurement",
    permanent: true,
    destination: "/en",
  },
  {
    source: "/residential/current-projects/pulse-townhouses",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/current-projects/pulse-villas",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/current-projects/rent-to-own",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/current-projects/sakany",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/current-projects/the-pulse-residentials",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/crew-village",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/parklane",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/sakany-one",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/the-grove",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/the-pulse-hospitality",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/future-projects/the-pulse-mall",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/overview",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/residential/overview/residential-district",
    permanent: true,
    destination: "/en/live",
  },
  {
    source: "/terms-of-use",
    permanent: true,
    destination: "/policy",
  },
];

export default redirects;
