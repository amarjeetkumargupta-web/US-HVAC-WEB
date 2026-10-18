export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  commonProblems: string[];
  whatWeDoTitle: string;
  whatWeDo: string[];
  relatedServices: string[];
  faqs: ServiceFAQ[];
}

export const BUSINESS_PHONE = "+1 (937) 241-4909";
export const BUSINESS_PHONE_RAW = "+19372414909";
export const BUSINESS_NAME = "Armada HVAC";
export const BUSINESS_TAGLINE = "Heating, Ventilation & Air Conditioning";
export const BUSINESS_CITY = "Dayton";
export const BUSINESS_STATE = "Ohio";
export const BUSINESS_STATE_ABBR = "OH";

export const SERVICE_AREAS = [
  "Dayton",
  "Huber Heights",
  "Riverside",
  "Trotwood",
  "Kettering",
  "Oakwood",
  "Beavercreek",
  "Fairborn",
  "Vandalia",
  "Englewood",
  "Centerville",
  "Miamisburg",
  "Moraine",
];

export const services: ServiceData[] = [
  {
    slug: "hvac-repair",
    name: "HVAC Repair",
    shortDescription:
      "Comprehensive troubleshooting and repair for heating and cooling systems experiencing poor airflow, uneven temperatures, or inconsistent operation.",
    heroDescription:
      "When your HVAC system stops working properly, you need fast, reliable repair service. Armada HVAC provides thorough diagnostics and practical repair solutions for homes throughout the Dayton area.",
    icon: "Wrench",
    metaTitle: "HVAC Repair in Dayton, OH | Armada HVAC",
    metaDescription:
      "Professional HVAC repair services in Dayton, Ohio. Armada HVAC provides diagnostics and repair for heating and cooling systems. Call (937) 241-4909.",
    overview: [
      "HVAC systems are complex and can develop issues that affect your comfort and energy bills. Whether your system is making unusual noises, producing uneven temperatures, or has stopped working entirely, a proper diagnosis is the first step toward a lasting fix.",
      "Our technicians evaluate your entire system to identify the root cause of the problem rather than simply addressing surface-level symptoms. This approach helps prevent recurring issues and extends the life of your equipment.",
    ],
    commonProblems: [
      "System not turning on or failing to reach set temperature",
      "Unusual sounds such as banging, squealing, or rattling",
      "Uneven heating or cooling between rooms",
      "Poor airflow from vents",
      "Frequent cycling on and off",
      "Unexpected increase in energy bills",
      "Thermostat not communicating with the system",
    ],
    whatWeDoTitle: "What HVAC Repair Involves",
    whatWeDo: [
      "Thorough system inspection covering electrical connections, mechanical components, and airflow",
      "Diagnosis of the specific issue causing reduced performance",
      "Clear explanation of repair options and associated considerations",
      "Component repair or replacement using quality parts",
      "System testing after repair to confirm proper operation",
      "Recommendations for preventing future issues",
    ],
    relatedServices: [
      "hvac-maintenance",
      "hvac-replacement",
      "indoor-air-quality",
      "thermostat-services",
    ],
    faqs: [
      {
        question: "How do I know if my HVAC system needs repair?",
        answer:
          "Common signs include unusual noises, weak airflow, inconsistent temperatures, frequent cycling, higher energy bills, or the system not responding to thermostat adjustments. If you notice any of these, it's worth having the system evaluated.",
      },
      {
        question: "Can all HVAC problems be repaired?",
        answer:
          "Most issues can be addressed with professional repair. However, if equipment is significantly aged or the repair cost approaches the value of replacement, we'll discuss both options honestly so you can make an informed decision.",
      },
      {
        question: "How quickly can you respond to a repair request?",
        answer:
          "We aim to respond promptly to all repair requests. Contact us by phone at (937) 241-4909 to discuss your situation and schedule service at a time that works for you.",
      },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortDescription:
      "Air conditioning diagnostics and repair for weak cooling, short cycling, airflow concerns, and thermostat issues in Dayton-area homes.",
    heroDescription:
      "Ohio summers can be demanding on your air conditioning system. When your AC isn't performing properly, Armada HVAC provides reliable repair service to restore your indoor comfort.",
    icon: "Snowflake",
    metaTitle: "AC Repair in Dayton, OH | Armada HVAC",
    metaDescription:
      "Reliable AC repair services in Dayton, Ohio. Armada HVAC diagnoses and fixes air conditioning problems including weak cooling, unusual noises, and airflow issues. Call (937) 241-4909.",
    overview: [
      "A properly functioning air conditioner is essential for comfort during warm Ohio months. When your AC system develops problems, delays in addressing them can lead to further wear and higher repair costs.",
      "Armada HVAC evaluates the full cooling system — from the outdoor condenser unit to your indoor components and ductwork — to identify exactly what's causing the issue and provide a targeted repair.",
    ],
    commonProblems: [
      "AC blowing warm or insufficiently cool air",
      "Reduced airflow from vents",
      "System cycling on and off frequently (short cycling)",
      "Ice forming on the evaporator coil or refrigerant lines",
      "Water leaking from the indoor unit",
      "Unusual humming, buzzing, or grinding sounds",
      "AC not turning on despite thermostat settings",
    ],
    whatWeDoTitle: "What AC Repair Involves",
    whatWeDo: [
      "Inspection of the outdoor condenser unit and indoor evaporator",
      "Refrigerant level evaluation and leak detection when needed",
      "Electrical component and wiring inspection",
      "Filter and airflow assessment",
      "Compressor and capacitor testing",
      "System performance verification after repair",
    ],
    relatedServices: [
      "ac-installation",
      "ac-maintenance",
      "hvac-repair",
      "thermostat-services",
    ],
    faqs: [
      {
        question: "Why is my AC running but not cooling?",
        answer:
          "This can stem from low refrigerant, a dirty condenser, a failing compressor, a clogged filter, or thermostat issues. A professional diagnosis can pinpoint the exact cause.",
      },
      {
        question: "Should I repair or replace my air conditioner?",
        answer:
          "The answer depends on the age of your system, the cost of the repair, and the unit's overall condition. We help you weigh both options so the decision makes practical and financial sense.",
      },
      {
        question: "How long does an AC repair typically take?",
        answer:
          "Many common repairs can be completed in a single visit. More complex issues involving parts ordering may require a follow-up appointment. We'll communicate timelines clearly.",
      },
    ],
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    shortDescription:
      "New air conditioning installation and replacement with attention to system sizing, property needs, and long-term cooling performance.",
    heroDescription:
      "Whether you're replacing an aging system or installing air conditioning for the first time, proper installation is critical for performance and longevity. Armada HVAC helps Dayton homeowners make informed decisions.",
    icon: "AirVent",
    metaTitle: "AC Installation in Dayton, OH | Armada HVAC",
    metaDescription:
      "Professional AC installation services in Dayton, Ohio. Armada HVAC provides expert air conditioning installation and replacement. Call (937) 241-4909.",
    overview: [
      "The right air conditioning installation starts with understanding your home's specific cooling needs. System sizing, ductwork compatibility, and energy considerations all play a role in how well your new AC will perform over time.",
      "Armada HVAC guides you through the selection process and handles the installation with attention to manufacturer specifications and local requirements, ensuring your investment delivers reliable comfort.",
    ],
    commonProblems: [
      "Current AC system is over 15 years old and losing efficiency",
      "Frequent and costly repairs on existing equipment",
      "Home additions or changes that exceed current cooling capacity",
      "Uneven cooling despite a functioning system",
      "Desire for improved energy efficiency and lower utility bills",
      "First-time AC installation for homes without existing central cooling",
    ],
    whatWeDoTitle: "What AC Installation Involves",
    whatWeDo: [
      "Assessment of your home's cooling requirements and existing ductwork",
      "Discussion of system options based on your priorities and budget",
      "Professional installation following manufacturer guidelines",
      "Ductwork modifications or additions when needed",
      "Complete system testing and performance verification",
      "Walkthrough of your new system's operation and maintenance needs",
    ],
    relatedServices: [
      "ac-repair",
      "ac-maintenance",
      "hvac-replacement",
      "ductwork-ventilation",
    ],
    faqs: [
      {
        question: "How do I know what size AC unit I need?",
        answer:
          "System sizing depends on your home's square footage, insulation, window placement, local climate, and other factors. We perform a thorough assessment to recommend appropriate sizing rather than guessing.",
      },
      {
        question: "How long does an AC installation take?",
        answer:
          "A standard replacement typically takes one day. New installations or those requiring significant ductwork modification may take longer. We'll provide a clear timeline before work begins.",
      },
      {
        question: "What should I expect after a new AC installation?",
        answer:
          "You should experience consistent, efficient cooling throughout your home. We'll walk you through proper thermostat settings and recommend a maintenance schedule to protect your investment.",
      },
    ],
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance",
    shortDescription:
      "Seasonal air conditioning maintenance focused on filters, airflow, equipment condition, and overall cooling performance before warm weather.",
    heroDescription:
      "Regular AC maintenance helps keep your cooling system running efficiently and can prevent unexpected breakdowns during Ohio's hottest months. Armada HVAC provides thorough seasonal service.",
    icon: "Settings",
    metaTitle: "AC Maintenance in Dayton, OH | Armada HVAC",
    metaDescription:
      "AC maintenance services in Dayton, Ohio. Keep your air conditioning running efficiently with seasonal maintenance from Armada HVAC. Call (937) 241-4909.",
    overview: [
      "Air conditioning systems benefit from regular maintenance, especially before the cooling season begins. Neglected systems tend to lose efficiency over time, work harder to cool your home, and may develop issues that lead to costly repairs.",
      "Our maintenance service covers the key components that affect cooling performance, helping you get the most from your equipment while catching potential problems early.",
    ],
    commonProblems: [
      "System hasn't been serviced in over a year",
      "Cooling performance seems to decline each season",
      "Energy bills are higher than expected during summer",
      "Filters haven't been replaced regularly",
      "System takes longer to cool the home than it used to",
      "Preparing a home for sale and ensuring the AC is in good condition",
    ],
    whatWeDoTitle: "What AC Maintenance Includes",
    whatWeDo: [
      "Filter inspection and replacement recommendations",
      "Condenser and evaporator coil cleaning or evaluation",
      "Refrigerant level check",
      "Electrical connection inspection and tightening",
      "Thermostat calibration verification",
      "Drain line inspection and clearing",
      "Overall system performance assessment",
    ],
    relatedServices: [
      "ac-repair",
      "hvac-maintenance",
      "ac-installation",
      "thermostat-services",
    ],
    faqs: [
      {
        question: "How often should I have my AC maintained?",
        answer:
          "Most manufacturers recommend annual maintenance, ideally in the spring before peak cooling season. Regular service helps maintain efficiency and can extend the life of your equipment.",
      },
      {
        question: "Can maintenance prevent AC breakdowns?",
        answer:
          "While no maintenance plan can guarantee against every issue, regular service significantly reduces the risk of unexpected failures by catching potential problems before they escalate.",
      },
      {
        question: "What's the difference between AC maintenance and AC repair?",
        answer:
          "Maintenance is preventive — it keeps your system in good operating condition. Repair addresses specific problems that have already developed. Both are important for reliable cooling.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    shortDescription:
      "Heating system troubleshooting and repair for limited heat output, inconsistent temperatures, airflow concerns, or unusual operation.",
    heroDescription:
      "When your heating system isn't performing, especially during cold Ohio winters, you need reliable repair service. Armada HVAC provides prompt heating repair for Dayton-area homes.",
    icon: "Flame",
    metaTitle: "Heating Repair in Dayton, OH | Armada HVAC",
    metaDescription:
      "Professional heating repair in Dayton, Ohio. Armada HVAC troubleshoots and repairs heating systems for reliable warmth. Call (937) 241-4909.",
    overview: [
      "Ohio winters demand a reliable heating system. When your heater begins underperforming or stops working entirely, a timely repair can prevent discomfort and potential damage to your home from frozen pipes or humidity issues.",
      "Armada HVAC evaluates your heating system thoroughly to identify the source of the problem and provide an effective repair, getting your home warm again as quickly as possible.",
    ],
    commonProblems: [
      "No heat despite the system running",
      "Insufficient or weak heat output",
      "Inconsistent temperatures between rooms",
      "System producing strange odors",
      "Heating system won't turn on",
      "Pilot light issues or ignition failures",
      "Frequent system shutdowns",
    ],
    whatWeDoTitle: "What Heating Repair Involves",
    whatWeDo: [
      "Complete heating system inspection and diagnostics",
      "Heat exchanger evaluation for safety concerns",
      "Ignition system and pilot light troubleshooting",
      "Blower motor and fan assessment",
      "Thermostat communication verification",
      "Gas valve and fuel delivery inspection where applicable",
      "Post-repair system testing and safety verification",
    ],
    relatedServices: [
      "heating-installation",
      "furnace-repair",
      "hvac-repair",
      "thermostat-services",
    ],
    faqs: [
      {
        question: "Why is my heater blowing cold air?",
        answer:
          "This can be caused by thermostat issues, a failed ignition system, a dirty flame sensor, a malfunctioning gas valve, or airflow restrictions. A professional evaluation can identify the specific cause.",
      },
      {
        question: "Is it safe to run my heater if it smells unusual?",
        answer:
          "If you smell gas, turn off the system immediately and contact your gas company. Other unusual odors like burning dust at the start of the season are typically temporary, but persistent smells should be evaluated by a professional.",
      },
      {
        question: "How quickly can you repair my heating system?",
        answer:
          "We prioritize heating repairs during cold weather and aim to respond quickly. Call (937) 241-4909 to discuss your situation and schedule service.",
      },
    ],
  },
  {
    slug: "heating-installation",
    name: "Heating Installation",
    shortDescription:
      "Residential heating system installation and replacement guidance based on your property, existing equipment, and comfort priorities.",
    heroDescription:
      "Installing a new heating system is a significant decision. Armada HVAC provides thoughtful guidance and professional installation to ensure your Dayton home stays warm and comfortable for years to come.",
    icon: "Heater",
    metaTitle: "Heating Installation in Dayton, OH | Armada HVAC",
    metaDescription:
      "Heating installation services in Dayton, Ohio. Armada HVAC provides professional heating system installation and replacement. Call (937) 241-4909.",
    overview: [
      "The right heating installation depends on your home's size, insulation, existing infrastructure, and your family's comfort expectations. A properly sized and installed system operates more efficiently and lasts longer.",
      "Armada HVAC helps you navigate the options — from system type and capacity to energy efficiency ratings — and handles the installation with care and attention to detail.",
    ],
    commonProblems: [
      "Current heating system is aging and frequently needs repair",
      "Home additions have increased heating demands beyond system capacity",
      "Energy bills are unreasonably high during winter months",
      "System can't maintain comfortable temperatures",
      "Building a new home and selecting a heating system",
      "Switching from one fuel type to another",
    ],
    whatWeDoTitle: "What Heating Installation Involves",
    whatWeDo: [
      "Evaluation of your home's heating requirements",
      "Discussion of system types, efficiency ratings, and costs",
      "Professional removal of existing equipment when applicable",
      "Installation following manufacturer and code requirements",
      "Ductwork assessment and modification if needed",
      "Complete system testing and performance verification",
      "Guidance on operation and maintenance of your new system",
    ],
    relatedServices: [
      "heating-repair",
      "furnace-repair",
      "hvac-replacement",
      "ductwork-ventilation",
    ],
    faqs: [
      {
        question: "What type of heating system is best for my home?",
        answer:
          "The best system depends on your home's existing infrastructure, your fuel preferences, efficiency goals, and budget. We'll discuss the options and help you choose what makes the most sense for your situation.",
      },
      {
        question: "How long does a new heating system last?",
        answer:
          "With proper maintenance, most modern heating systems last 15 to 20 years. The actual lifespan depends on usage, maintenance frequency, and the specific equipment installed.",
      },
      {
        question: "Will a new heating system lower my energy bills?",
        answer:
          "In many cases, yes. Modern heating systems are significantly more efficient than older models. The exact savings depend on your current system's efficiency and the replacement you choose.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortDescription:
      "Furnace diagnostics and repair for no-heat conditions, frequent cycling, strange noises, thermostat problems, and reduced airflow.",
    heroDescription:
      "A malfunctioning furnace during a cold Ohio winter requires prompt attention. Armada HVAC provides reliable furnace repair for homes throughout the Dayton area.",
    icon: "Flame",
    metaTitle: "Furnace Repair in Dayton, OH | Armada HVAC",
    metaDescription:
      "Expert furnace repair in Dayton, Ohio. Armada HVAC diagnoses and repairs furnace problems including no-heat conditions and unusual noises. Call (937) 241-4909.",
    overview: [
      "Furnaces are the most common heating system in Ohio homes, and when they malfunction, the impact on comfort is immediate. Whether your furnace won't ignite, is producing insufficient heat, or is making concerning sounds, identifying the root cause is essential.",
      "Our technicians are experienced with gas furnaces, electric furnaces, and dual-fuel systems. We diagnose the issue accurately and provide clear repair options so you can make an informed decision.",
    ],
    commonProblems: [
      "Furnace not producing any heat",
      "Frequent on/off cycling without reaching set temperature",
      "Blower running continuously but no heat produced",
      "Yellow or flickering pilot light instead of steady blue",
      "Banging, popping, or rattling sounds during operation",
      "Furnace shutting down due to safety lockout",
      "Carbon monoxide detector alerts near the furnace area",
    ],
    whatWeDoTitle: "What Furnace Repair Involves",
    whatWeDo: [
      "Comprehensive furnace inspection and safety evaluation",
      "Ignition system diagnosis (pilot light, electronic ignition, or hot surface igniter)",
      "Heat exchanger inspection for cracks or damage",
      "Flame sensor cleaning or replacement",
      "Blower motor and capacitor testing",
      "Gas pressure and valve operation verification",
      "Post-repair safety and performance testing",
    ],
    relatedServices: [
      "furnace-maintenance",
      "heating-repair",
      "hvac-repair",
      "emergency-hvac-service",
    ],
    faqs: [
      {
        question: "Why does my furnace keep shutting off?",
        answer:
          "Common causes include a dirty flame sensor, a clogged filter restricting airflow, a malfunctioning thermostat, or a safety sensor detecting an issue. A professional diagnosis can identify the specific cause.",
      },
      {
        question: "Is a cracked heat exchanger dangerous?",
        answer:
          "A cracked heat exchanger can potentially allow combustion gases, including carbon monoxide, to enter your living space. This is a serious safety concern that should be addressed immediately.",
      },
      {
        question: "How often should a furnace filter be changed?",
        answer:
          "Most standard filters should be checked monthly and replaced every 1 to 3 months depending on the filter type, pets, allergies, and overall air quality in your home.",
      },
    ],
  },
  {
    slug: "furnace-maintenance",
    name: "Furnace Maintenance",
    shortDescription:
      "Routine furnace service to prepare equipment for colder weather and identify potential operating concerns before they become problems.",
    heroDescription:
      "Annual furnace maintenance helps ensure your heating system is ready for Ohio's cold months. Armada HVAC provides thorough seasonal furnace service for Dayton-area homes.",
    icon: "Settings",
    metaTitle: "Furnace Maintenance in Dayton, OH | Armada HVAC",
    metaDescription:
      "Furnace maintenance services in Dayton, Ohio. Prepare your furnace for winter with seasonal maintenance from Armada HVAC. Call (937) 241-4909.",
    overview: [
      "A furnace that runs without regular maintenance is more likely to develop problems when you need it most. Seasonal maintenance helps identify worn components, dirty filters, and potential safety concerns before the heating season begins.",
      "Our maintenance service covers the key areas that affect furnace performance, efficiency, and safety, giving you confidence that your system is prepared for cold weather.",
    ],
    commonProblems: [
      "Furnace hasn't been inspected since last winter",
      "Heating performance has gradually declined",
      "Higher-than-expected heating bills",
      "Concerns about furnace safety after years of use",
      "Preparing for winter after a home purchase",
      "Maintaining warranty requirements through regular service",
    ],
    whatWeDoTitle: "What Furnace Maintenance Includes",
    whatWeDo: [
      "Filter inspection and replacement guidance",
      "Heat exchanger visual inspection",
      "Burner and ignition system cleaning and evaluation",
      "Flame sensor cleaning",
      "Blower motor inspection and lubrication where applicable",
      "Thermostat operation verification",
      "Safety control and gas connection inspection",
      "Carbon monoxide testing in the furnace area",
    ],
    relatedServices: [
      "furnace-repair",
      "hvac-maintenance",
      "heating-repair",
      "thermostat-services",
    ],
    faqs: [
      {
        question: "When is the best time to schedule furnace maintenance?",
        answer:
          "The ideal time is early fall, before you begin relying on your heating system. This allows time to address any issues before cold weather arrives.",
      },
      {
        question: "Does regular maintenance extend furnace life?",
        answer:
          "Generally, yes. Systems that receive regular maintenance tend to last longer, operate more efficiently, and experience fewer unexpected failures compared to neglected equipment.",
      },
      {
        question: "What should I do between professional maintenance visits?",
        answer:
          "The most important thing you can do is regularly check and replace your furnace filter. Also, keep the area around your furnace clear of clutter and listen for unusual sounds during operation.",
      },
    ],
  },
  {
    slug: "hvac-maintenance",
    name: "HVAC Maintenance",
    shortDescription:
      "Preventive heating and cooling service for seasonal preparation, system inspection, filter awareness, and dependable operation year-round.",
    heroDescription:
      "Complete HVAC maintenance addresses both your heating and cooling systems. Armada HVAC provides comprehensive seasonal service to keep Dayton homes comfortable throughout the year.",
    icon: "ShieldCheck",
    metaTitle: "HVAC Maintenance in Dayton, OH | Armada HVAC",
    metaDescription:
      "HVAC maintenance services in Dayton, Ohio. Keep your heating and cooling systems running reliably with maintenance from Armada HVAC. Call (937) 241-4909.",
    overview: [
      "Comprehensive HVAC maintenance covers both the heating and cooling components of your system. Regular seasonal service helps maintain efficiency, supports equipment longevity, and reduces the likelihood of unexpected breakdowns.",
      "Whether you schedule separate visits for heating and cooling or prefer a complete system check, Armada HVAC tailors the maintenance to your equipment and seasonal needs.",
    ],
    commonProblems: [
      "System performance declining over time",
      "Rising energy costs without changes in usage",
      "Wanting to establish a regular maintenance routine",
      "New homeowner unfamiliar with the existing HVAC system",
      "Equipment warranty requires documented maintenance",
      "Preparing for seasonal temperature changes",
    ],
    whatWeDoTitle: "What HVAC Maintenance Covers",
    whatWeDo: [
      "Complete heating system inspection (furnace, heat pump, or boiler)",
      "Air conditioning system evaluation (condenser, evaporator, refrigerant)",
      "Ductwork and airflow assessment",
      "Filter inspection and recommendations",
      "Thermostat calibration and programming review",
      "Electrical connection inspection",
      "Safety device verification",
      "Written summary of system condition and recommendations",
    ],
    relatedServices: [
      "ac-maintenance",
      "furnace-maintenance",
      "hvac-repair",
      "indoor-air-quality",
    ],
    faqs: [
      {
        question: "How often should full HVAC maintenance be done?",
        answer:
          "Most HVAC professionals recommend twice-yearly maintenance: once before the cooling season (spring) and once before the heating season (fall). This ensures both systems are ready when needed.",
      },
      {
        question: "What's included in a full HVAC maintenance visit?",
        answer:
          "A complete visit covers both heating and cooling components including filters, coils, electrical connections, thermostat operation, refrigerant levels, safety devices, and overall system performance.",
      },
      {
        question: "Is HVAC maintenance worth the investment?",
        answer:
          "Regular maintenance can reduce energy costs, prevent expensive emergency repairs, maintain equipment warranties, and extend the useful life of your systems. Most homeowners find it pays for itself over time.",
      },
    ],
  },
  {
    slug: "thermostat-services",
    name: "Thermostat Services",
    shortDescription:
      "Thermostat troubleshooting, replacement, and installation for inaccurate readings, poor temperature control, and outdated controls.",
    heroDescription:
      "Your thermostat is the control center for your entire HVAC system. Armada HVAC provides thermostat troubleshooting, installation, and upgrade services for Dayton-area homes.",
    icon: "Thermometer",
    metaTitle: "Thermostat Services in Dayton, OH | Armada HVAC",
    metaDescription:
      "Thermostat installation, replacement, and troubleshooting in Dayton, Ohio. Armada HVAC helps you control your comfort. Call (937) 241-4909.",
    overview: [
      "A thermostat that isn't working properly can cause comfort issues throughout your home, even if your heating and cooling equipment is in good condition. Inaccurate readings, poor responsiveness, and connectivity problems all affect your experience.",
      "Whether you need your existing thermostat repaired, want to upgrade to a programmable or smart thermostat, or need a new thermostat installed with a system replacement, Armada HVAC can help.",
    ],
    commonProblems: [
      "Temperature readings don't match the actual room temperature",
      "HVAC system doesn't respond to thermostat changes",
      "Screen is blank, flickering, or unresponsive",
      "Thermostat loses programmed settings or schedule",
      "Wi-Fi connectivity issues with smart thermostats",
      "Desire to upgrade from a manual to a programmable or smart thermostat",
    ],
    whatWeDoTitle: "What Thermostat Services Include",
    whatWeDo: [
      "Troubleshooting existing thermostat issues",
      "Wiring inspection and repair",
      "Thermostat calibration for accurate temperature readings",
      "Removal and replacement of outdated thermostats",
      "Smart thermostat installation and configuration",
      "Compatibility verification with your HVAC system",
      "Walkthrough of new thermostat features and programming",
    ],
    relatedServices: [
      "hvac-repair",
      "ac-maintenance",
      "furnace-maintenance",
      "hvac-maintenance",
    ],
    faqs: [
      {
        question: "Should I upgrade to a smart thermostat?",
        answer:
          "Smart thermostats offer convenient features like remote control, learning schedules, and energy usage reports. Whether it's worth upgrading depends on your comfort preferences and how much control you want over your HVAC system.",
      },
      {
        question: "Can any thermostat work with my HVAC system?",
        answer:
          "Not all thermostats are compatible with every HVAC system. Factors like wiring, system type, and voltage determine compatibility. We'll verify compatibility before recommending or installing a thermostat.",
      },
      {
        question: "Why does my thermostat read a different temperature than I feel?",
        answer:
          "Thermostat placement, direct sunlight, nearby heat sources, and calibration issues can all cause inaccurate readings. We can assess the situation and recommend solutions.",
      },
    ],
  },
  {
    slug: "ductwork-ventilation",
    name: "Ductwork & Ventilation",
    shortDescription:
      "Inspection and service for damaged ducts, restricted airflow, uneven temperatures, and ventilation concerns in your home.",
    heroDescription:
      "Your ductwork is the highway for heated and cooled air throughout your home. Damaged or poorly designed ducts can undermine even the best HVAC equipment. Armada HVAC evaluates and services ductwork for Dayton homes.",
    icon: "Wind",
    metaTitle: "Ductwork & Ventilation Services in Dayton, OH | Armada HVAC",
    metaDescription:
      "Ductwork and ventilation services in Dayton, Ohio. Armada HVAC inspects, repairs, and improves your home's duct system. Call (937) 241-4909.",
    overview: [
      "Even a high-quality HVAC system can underperform if the ductwork delivering conditioned air is damaged, leaking, or poorly designed. Duct issues are often hidden behind walls and in attics, making them easy to overlook.",
      "Armada HVAC inspects your duct system to identify leaks, restrictions, and design issues that may be causing uneven temperatures, poor airflow, or wasted energy.",
    ],
    commonProblems: [
      "Rooms that are consistently too hot or too cold",
      "Visible damage, disconnection, or sagging in exposed ducts",
      "Excessive dust coming from vents",
      "Noticeable airflow differences between rooms",
      "Whistling or whooshing sounds from ductwork",
      "High energy bills despite a well-maintained HVAC system",
      "Musty or stale odors coming from vents",
    ],
    whatWeDoTitle: "What Ductwork & Ventilation Service Includes",
    whatWeDo: [
      "Visual inspection of accessible ductwork",
      "Identification of leaks, gaps, and disconnections",
      "Airflow measurement and comparison across rooms",
      "Duct sealing to reduce conditioned air loss",
      "Insulation assessment for ducts in unconditioned spaces",
      "Recommendations for duct modification or redesign when needed",
      "Ventilation evaluation for adequate fresh air circulation",
    ],
    relatedServices: [
      "hvac-repair",
      "indoor-air-quality",
      "hvac-maintenance",
      "ac-installation",
    ],
    faqs: [
      {
        question: "How do I know if my ductwork has problems?",
        answer:
          "Signs include uneven temperatures between rooms, excessive dust, higher-than-expected energy bills, and rooms that never seem to reach the set temperature. A professional inspection can confirm whether ductwork is the cause.",
      },
      {
        question: "Can duct problems affect my energy bills?",
        answer:
          "Yes, significantly. Leaky ductwork can lose 20-30% of the conditioned air before it reaches your living spaces, forcing your HVAC system to work harder and longer to maintain comfort.",
      },
      {
        question: "Do you replace ductwork?",
        answer:
          "We can repair and seal existing ductwork in many cases. If ductwork needs to be replaced or redesigned, we'll evaluate the scope of work and discuss your options.",
      },
    ],
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    shortDescription:
      "Practical options for improving filtration, ventilation, humidity control, and overall comfort of the air inside your home.",
    heroDescription:
      "The air inside your home can contain allergens, dust, and pollutants that affect your family's comfort and health. Armada HVAC provides indoor air quality solutions for Dayton-area homes.",
    icon: "Leaf",
    metaTitle: "Indoor Air Quality Services in Dayton, OH | Armada HVAC",
    metaDescription:
      "Indoor air quality services in Dayton, Ohio. Armada HVAC offers filtration, ventilation, and humidity solutions for healthier indoor air. Call (937) 241-4909.",
    overview: [
      "Indoor air quality is about more than just temperature. The air circulating through your home can carry dust, allergens, pet dander, mold spores, and other particles that affect comfort and well-being.",
      "Armada HVAC evaluates your home's air quality concerns and recommends practical solutions that work with your existing HVAC system to improve filtration, ventilation, and humidity control.",
    ],
    commonProblems: [
      "Persistent dust accumulation despite regular cleaning",
      "Allergy symptoms that worsen while indoors",
      "Excessive humidity leading to condensation on windows",
      "Dry air causing skin irritation and static electricity in winter",
      "Musty or stale air in certain areas of the home",
      "Concerns about airborne contaminants and household air quality",
    ],
    whatWeDoTitle: "What Indoor Air Quality Services Include",
    whatWeDo: [
      "Assessment of your home's current air quality concerns",
      "Filter upgrade recommendations for improved particle capture",
      "Humidity evaluation and humidifier/dehumidifier options",
      "Ventilation assessment for adequate fresh air exchange",
      "UV light system discussion for air purification",
      "Whole-home air cleaner evaluation",
      "Integration with your existing HVAC system",
    ],
    relatedServices: [
      "ductwork-ventilation",
      "hvac-maintenance",
      "ac-maintenance",
      "hvac-repair",
    ],
    faqs: [
      {
        question: "How can I tell if my home has poor air quality?",
        answer:
          "Common indicators include persistent allergies while indoors, excessive dust, musty odors, visible mold, condensation on windows, and respiratory discomfort. These symptoms can point to filtration, ventilation, or humidity issues.",
      },
      {
        question: "Will a better filter improve my air quality?",
        answer:
          "Upgrading your HVAC filter can help capture smaller particles, but it's important to use a filter that your system can handle without restricting airflow. We'll recommend an appropriate option for your equipment.",
      },
      {
        question: "Do I need a whole-home humidifier?",
        answer:
          "If you experience significant dry-air issues during winter — cracked skin, static electricity, dry sinuses — a whole-home humidifier integrated with your HVAC system can make a noticeable difference in comfort.",
      },
    ],
  },
  {
    slug: "hvac-replacement",
    name: "HVAC Replacement",
    shortDescription:
      "Balanced guidance for homeowners considering system replacement because of recurring issues, changing comfort needs, or aging equipment.",
    heroDescription:
      "When repair is no longer the practical choice, HVAC replacement can restore comfort and efficiency. Armada HVAC provides honest guidance and professional installation for Dayton-area homeowners.",
    icon: "RefreshCw",
    metaTitle: "HVAC Replacement in Dayton, OH | Armada HVAC",
    metaDescription:
      "HVAC system replacement in Dayton, Ohio. Armada HVAC provides honest guidance and professional installation for new heating and cooling systems. Call (937) 241-4909.",
    overview: [
      "Deciding between repairing and replacing an HVAC system is a significant financial decision. There's no universal answer — it depends on the age of your equipment, the cost and frequency of repairs, your comfort expectations, and your budget.",
      "Armada HVAC provides a balanced perspective, helping you understand when replacement makes practical sense and when continued repair may still be the better option. We don't pressure — we inform.",
    ],
    commonProblems: [
      "System is over 15-20 years old and requiring frequent repairs",
      "Repair costs are approaching 50% of replacement value",
      "System uses outdated refrigerant (R-22) that's increasingly expensive",
      "Comfort has significantly declined despite repairs",
      "Energy bills keep rising without changes in usage",
      "Major component failure (compressor, heat exchanger) on an aging system",
    ],
    whatWeDoTitle: "What HVAC Replacement Involves",
    whatWeDo: [
      "Honest assessment of whether replacement is the right choice",
      "Evaluation of your home's heating and cooling requirements",
      "Discussion of system options, efficiency ratings, and investment levels",
      "Professional removal and disposal of existing equipment",
      "Installation of new equipment following manufacturer specifications",
      "Ductwork evaluation and modification when needed",
      "Complete system commissioning and performance testing",
      "Walkthrough of new system operation and maintenance guidelines",
    ],
    relatedServices: [
      "hvac-repair",
      "ac-installation",
      "heating-installation",
      "hvac-maintenance",
    ],
    faqs: [
      {
        question: "How do I know when to replace rather than repair?",
        answer:
          "Consider replacement when repair costs are significant relative to the system's value, when the equipment is over 15 years old, when comfort has declined noticeably, or when a major component has failed on aging equipment.",
      },
      {
        question: "How long does an HVAC replacement take?",
        answer:
          "A standard heating and cooling system replacement typically takes 1-2 days depending on the complexity, existing ductwork condition, and any modifications needed.",
      },
      {
        question: "Will a new HVAC system really save me money?",
        answer:
          "Modern systems are significantly more efficient than those manufactured 15-20 years ago. While the upfront cost is significant, reduced energy consumption and fewer repair needs typically result in long-term savings.",
      },
    ],
  },
  {
    slug: "emergency-hvac-service",
    name: "Emergency HVAC Service",
    shortDescription:
      "Phone availability to discuss heating or cooling emergencies outside regular business hours and coordinate an appropriate next step.",
    heroDescription:
      "HVAC emergencies don't wait for business hours. Armada HVAC is available by phone to discuss urgent heating and cooling problems and help coordinate a response for Dayton-area homes.",
    icon: "AlertTriangle",
    metaTitle: "Emergency HVAC Service in Dayton, OH | Armada HVAC",
    metaDescription:
      "Emergency HVAC service in Dayton, Ohio. Call Armada HVAC at (937) 241-4909 for urgent heating and cooling problems any time.",
    overview: [
      "Some HVAC problems can't wait until the next business day. A heating failure during freezing temperatures, a gas leak, or a complete AC breakdown during extreme heat can create genuine safety concerns for your family.",
      "Armada HVAC provides phone availability to discuss emergency situations, assess the urgency, and coordinate an appropriate response — whether that means immediate action or scheduled priority service.",
    ],
    commonProblems: [
      "Complete heating failure during freezing temperatures",
      "Gas leak or strong gas odor from HVAC equipment",
      "Carbon monoxide detector alerts near the furnace",
      "AC breakdown during extreme heat conditions",
      "Electrical burning smell from HVAC equipment",
      "Water leak from HVAC system causing active damage",
      "System making alarming sounds and shutting down repeatedly",
    ],
    whatWeDoTitle: "How Emergency Service Works",
    whatWeDo: [
      "Phone availability to assess the situation and urgency",
      "Safety guidance for immediate steps you can take",
      "Coordination of priority response when conditions warrant",
      "Thorough diagnosis once on-site",
      "Emergency repair using available parts and resources",
      "Follow-up scheduling if additional work is needed",
      "Recommendations to prevent future emergency situations",
    ],
    relatedServices: [
      "hvac-repair",
      "furnace-repair",
      "ac-repair",
      "heating-repair",
    ],
    faqs: [
      {
        question: "What counts as an HVAC emergency?",
        answer:
          "True emergencies include complete heating loss during freezing weather, gas leaks, carbon monoxide concerns, and situations where the HVAC problem creates a safety risk. We'll help assess whether your situation requires immediate attention.",
      },
      {
        question: "Is emergency service available 24/7?",
        answer:
          "We're available by phone to discuss urgent situations. Call (937) 241-4909 any time to explain what's happening, and we'll help determine the appropriate response.",
      },
      {
        question: "Does emergency service cost more?",
        answer:
          "Service outside regular hours may involve different pricing. We'll be transparent about any costs before proceeding so there are no surprises.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined);
}
