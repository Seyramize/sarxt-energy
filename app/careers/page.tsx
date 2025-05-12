import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, Award, Heart, Users, Zap, Send } from "lucide-react"

// Job listings data
const jobListings = [
  {
    id: 1,
    title: "Solar Installation Technician",
    department: "Solar",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$45,000 - $65,000",
    description:
      "Join our team of skilled technicians installing residential and commercial solar systems. You'll work with cutting-edge renewable energy technology while contributing to a sustainable future.",
    responsibilities: [
      "Install solar panels and related equipment according to plans and specifications",
      "Perform electrical wiring and connections to integrate solar systems",
      "Conduct system testing and troubleshooting",
      "Ensure all installations meet safety standards and building codes",
      "Provide excellent customer service and system education to clients",
    ],
    requirements: [
      "1+ years of experience in solar installation or related field",
      "Knowledge of electrical systems and basic construction principles",
      "Valid driver's license and clean driving record",
      "Ability to work at heights and lift up to 50 pounds",
      "NABCEP certification preferred but not required",
    ],
  },
  {
    id: 2,
    title: "HVAC Service Technician",
    department: "Mechanical",
    location: "Phoenix, AZ",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    description:
      "We're looking for experienced HVAC technicians to join our growing mechanical services team. You'll diagnose, repair, and maintain heating, ventilation, and air conditioning systems for residential and commercial clients.",
    responsibilities: [
      "Diagnose and repair HVAC system issues",
      "Perform preventative maintenance and system tune-ups",
      "Install new HVAC equipment according to specifications",
      "Maintain accurate service records and documentation",
      "Provide technical guidance and recommendations to customers",
    ],
    requirements: [
      "3+ years of experience in HVAC service and repair",
      "EPA certification and relevant state licenses",
      "Knowledge of various HVAC systems and controls",
      "Strong troubleshooting and problem-solving skills",
      "Excellent customer service and communication abilities",
    ],
  },
  {
    id: 3,
    title: "Electrical Project Manager",
    department: "Electrical",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Lead our electrical projects from inception to completion. You'll manage project teams, coordinate with clients and contractors, and ensure all work meets quality standards and timeline requirements.",
    responsibilities: [
      "Oversee multiple electrical projects simultaneously",
      "Develop project plans, schedules, and budgets",
      "Coordinate with clients, suppliers, and subcontractors",
      "Ensure compliance with codes, regulations, and safety standards",
      "Manage project teams and resources effectively",
    ],
    requirements: [
      "5+ years of experience in electrical project management",
      "Bachelor's degree in Electrical Engineering or related field",
      "Strong knowledge of electrical systems and construction processes",
      "Excellent leadership and team management skills",
      "Proficiency in project management software and MS Office",
    ],
  },
  {
    id: 4,
    title: "Plumbing Apprentice",
    department: "Plumbing",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    description:
      "Start your career in plumbing with our comprehensive apprenticeship program. You'll learn from experienced professionals while gaining hands-on experience in residential and commercial plumbing systems.",
    responsibilities: [
      "Assist licensed plumbers with installation and repair tasks",
      "Learn plumbing codes, regulations, and best practices",
      "Help maintain inventory and prepare job sites",
      "Participate in ongoing training and education programs",
      "Develop customer service and communication skills",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Mechanical aptitude and willingness to learn",
      "Reliable transportation and valid driver's license",
      "Physical ability to perform plumbing tasks",
      "Strong work ethic and positive attitude",
    ],
  },
  {
    id: 5,
    title: "Renewable Energy Sales Consultant",
    department: "Sales",
    location: "Remote (US-based)",
    type: "Full-time",
    salary: "$60,000 - $100,000 + Commission",
    description:
      "Drive our solar and renewable energy sales while helping customers transition to clean energy solutions. You'll consult with homeowners and businesses to design custom energy systems that meet their needs and budget.",
    responsibilities: [
      "Generate and qualify leads for renewable energy systems",
      "Conduct site assessments and energy consumption analyses",
      "Design customized solar and energy solutions",
      "Prepare and present proposals to potential clients",
      "Guide customers through the sales and installation process",
    ],
    requirements: [
      "2+ years of sales experience, preferably in solar or home improvement",
      "Strong understanding of renewable energy technologies",
      "Excellent communication and presentation skills",
      "Self-motivated with ability to work independently",
      "Proficiency with CRM software and sales tools",
    ],
  },
  {
    id: 6,
    title: "Solar Design Engineer",
    department: "Solar",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Design efficient and cost-effective solar PV systems for residential and commercial applications. You'll create detailed system layouts, perform energy analyses, and develop technical specifications for our installation teams.",
    responsibilities: [
      "Create detailed solar system designs using CAD and solar design software",
      "Perform site assessments and structural analyses",
      "Calculate energy production estimates and ROI projections",
      "Develop technical specifications and equipment lists",
      "Collaborate with sales and installation teams to optimize designs",
    ],
    requirements: [
      "Bachelor's degree in Engineering, Architecture, or related field",
      "2+ years of experience in solar PV system design",
      "Proficiency with AutoCAD, SketchUp, and solar design software",
      "Knowledge of NEC requirements and local building codes",
      "NABCEP PV Design Specialist certification preferred",
    ],
  },
  {
    id: 7,
    title: "Commercial HVAC Project Manager",
    department: "Mechanical",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description:
      "Oversee large-scale commercial HVAC projects from planning to completion. You'll manage project teams, coordinate with stakeholders, and ensure all work meets quality standards and timeline requirements.",
    responsibilities: [
      "Manage commercial HVAC installation and retrofit projects",
      "Develop project plans, schedules, and budgets",
      "Coordinate with clients, engineers, and subcontractors",
      "Ensure compliance with mechanical codes and regulations",
      "Oversee quality control and system commissioning",
    ],
    requirements: [
      "5+ years of experience in commercial HVAC project management",
      "Bachelor's degree in Mechanical Engineering or related field",
      "Strong knowledge of commercial HVAC systems and building automation",
      "Excellent leadership and client relationship skills",
      "Proficiency with project management and CAD software",
    ],
  },
  {
    id: 8,
    title: "Master Electrician",
    department: "Electrical",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Lead our electrical services team in delivering high-quality electrical installations and repairs. You'll oversee complex projects, mentor junior electricians, and ensure all work meets code requirements and safety standards.",
    responsibilities: [
      "Perform complex electrical installations and troubleshooting",
      "Lead and mentor a team of journeyman and apprentice electricians",
      "Review and approve electrical plans and specifications",
      "Ensure compliance with NEC and local electrical codes",
      "Coordinate with other trades and project managers",
    ],
    requirements: [
      "Master Electrician license in relevant state(s)",
      "7+ years of experience in commercial and residential electrical work",
      "In-depth knowledge of electrical systems and code requirements",
      "Strong leadership and communication skills",
      "Experience with renewable energy systems preferred",
    ],
  },
  {
    id: 9,
    title: "Commercial Plumbing Supervisor",
    department: "Plumbing",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Supervise our commercial plumbing operations, including new construction and renovation projects. You'll lead a team of plumbers, coordinate with project managers, and ensure all work meets quality standards and code requirements.",
    responsibilities: [
      "Supervise plumbing installations on commercial construction projects",
      "Coordinate with general contractors and other trades",
      "Ensure compliance with plumbing codes and specifications",
      "Manage material ordering and inventory",
      "Train and mentor journeyman plumbers and apprentices",
    ],
    requirements: [
      "Master Plumber license in relevant state(s)",
      "5+ years of experience in commercial plumbing",
      "Knowledge of commercial plumbing systems and code requirements",
      "Strong leadership and problem-solving skills",
      "Experience with project scheduling and management",
    ],
  },
  {
    id: 10,
    title: "Energy Efficiency Consultant",
    department: "Sales",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$65,000 - $85,000 + Commission",
    description:
      "Help businesses and homeowners reduce energy consumption and costs through comprehensive energy audits and efficiency upgrades. You'll identify opportunities for improvement and recommend tailored solutions across all our service areas.",
    responsibilities: [
      "Conduct detailed energy audits and assessments",
      "Analyze energy usage patterns and identify inefficiencies",
      "Recommend energy-saving solutions across HVAC, electrical, and plumbing systems",
      "Prepare energy efficiency proposals with ROI calculations",
      "Educate clients on energy conservation strategies",
    ],
    requirements: [
      "Bachelor's degree in Engineering, Environmental Science, or related field",
      "3+ years of experience in energy efficiency consulting",
      "BPI Building Analyst or CEM certification",
      "Knowledge of building systems and energy-saving technologies",
      "Strong analytical and communication skills",
    ],
  },
  {
    id: 11,
    title: "Solar Operations Manager",
    department: "Solar",
    location: "San Diego, CA",
    type: "Full-time",
    salary: "$85,000 - $105,000",
    description:
      "Oversee our solar division's daily operations, including installation scheduling, inventory management, and team coordination. You'll optimize processes to ensure efficient, high-quality solar installations while maintaining customer satisfaction.",
    responsibilities: [
      "Manage solar installation schedules and team assignments",
      "Oversee inventory and equipment procurement",
      "Develop and implement operational procedures and quality standards",
      "Coordinate with sales, design, and installation teams",
      "Track and report on key performance metrics",
    ],
    requirements: [
      "5+ years of experience in solar operations or construction management",
      "Bachelor's degree in Business, Engineering, or related field",
      "Strong knowledge of solar PV systems and installation processes",
      "Excellent organizational and leadership skills",
      "Experience with operational software and inventory management systems",
    ],
  },
  {
    id: 12,
    title: "HVAC Systems Engineer",
    department: "Mechanical",
    location: "Atlanta, GA",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Design efficient, sustainable HVAC systems for commercial and residential applications. You'll create detailed mechanical plans, perform load calculations, and develop specifications for our installation teams.",
    responsibilities: [
      "Design HVAC systems using engineering principles and industry standards",
      "Perform heating and cooling load calculations",
      "Select appropriate equipment and components for optimal performance",
      "Create detailed mechanical plans and specifications",
      "Collaborate with project managers and installation teams",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering or related field",
      "3+ years of experience in HVAC system design",
      "Proficiency with HVAC design software and AutoCAD",
      "Knowledge of ASHRAE standards and mechanical codes",
      "PE license preferred but not required",
    ],
  },
  {
    id: 13,
    title: "Electrical Estimator",
    department: "Electrical",
    location: "Portland, OR",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description:
      "Prepare accurate cost estimates for electrical projects of all sizes. You'll analyze plans and specifications, calculate material and labor requirements, and develop competitive bids that maintain our quality standards.",
    responsibilities: [
      "Review electrical plans and specifications for bidding opportunities",
      "Calculate material quantities and costs",
      "Estimate labor hours and requirements",
      "Prepare detailed bid proposals and scope documents",
      "Coordinate with project managers and vendors",
    ],
    requirements: [
      "3+ years of experience in electrical estimating",
      "Strong knowledge of electrical systems and construction processes",
      "Proficiency with estimating software and takeoff tools",
      "Attention to detail and analytical thinking",
      "Experience with electrical contracting preferred",
    ],
  },
  {
    id: 14,
    title: "Water Conservation Specialist",
    department: "Plumbing",
    location: "Las Vegas, NV",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "Help clients reduce water consumption and costs through innovative conservation solutions. You'll conduct water audits, recommend efficient fixtures and systems, and implement water-saving technologies.",
    responsibilities: [
      "Conduct comprehensive water audits for residential and commercial properties",
      "Identify water-saving opportunities and inefficiencies",
      "Recommend appropriate water conservation solutions",
      "Design rainwater harvesting and greywater systems",
      "Calculate ROI and water savings projections",
    ],
    requirements: [
      "Bachelor's degree in Environmental Science, Engineering, or related field",
      "3+ years of experience in water conservation or plumbing",
      "Knowledge of water-efficient technologies and systems",
      "Certification in water conservation or efficiency preferred",
      "Strong analytical and communication skills",
    ],
  },
  {
    id: 15,
    title: "Marketing Manager",
    department: "Sales",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Lead our marketing efforts across all service divisions. You'll develop and implement comprehensive marketing strategies to increase brand awareness, generate leads, and support our sales team in achieving revenue goals.",
    responsibilities: [
      "Develop and execute marketing strategies for all service divisions",
      "Manage digital marketing campaigns and social media presence",
      "Create compelling content for website, blog, and marketing materials",
      "Track and analyze marketing metrics and ROI",
      "Collaborate with sales team to generate and nurture leads",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "5+ years of experience in marketing, preferably in home services or energy",
      "Strong digital marketing and content creation skills",
      "Experience with CRM and marketing automation tools",
      "Excellent project management and communication abilities",
    ],
  },
  {
    id: 16,
    title: "Building Automation Technician",
    department: "Mechanical",
    location: "Minneapolis, MN",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description:
      "Install, program, and maintain building automation systems for commercial clients. You'll work with cutting-edge technology to optimize HVAC, lighting, and energy management systems for maximum efficiency and comfort.",
    responsibilities: [
      "Install and configure building automation systems and components",
      "Program controllers and interfaces for HVAC and lighting control",
      "Troubleshoot and resolve system issues and communication problems",
      "Perform system updates and maintenance",
      "Train clients on system operation and management",
    ],
    requirements: [
      "Associate's degree in Electronics, Computer Science, or related field",
      "2+ years of experience with building automation systems",
      "Knowledge of BACnet, Modbus, and other communication protocols",
      "Experience with major BAS platforms (Johnson Controls, Siemens, etc.)",
      "Strong computer skills and problem-solving abilities",
    ],
  },
  {
    id: 17,
    title: "Renewable Energy Project Developer",
    department: "Solar",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description:
      "Lead the development of commercial and utility-scale renewable energy projects from concept to construction. You'll identify opportunities, secure land rights, navigate permitting processes, and manage interconnection applications.",
    responsibilities: [
      "Identify and evaluate potential sites for renewable energy projects",
      "Negotiate land leases and purchase agreements",
      "Manage permitting and entitlement processes",
      "Coordinate interconnection applications and utility agreements",
      "Develop project financial models and secure financing",
    ],
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of experience in renewable energy project development",
      "Knowledge of utility interconnection processes and requirements",
      "Experience with land acquisition and permitting",
      "Strong financial modeling and negotiation skills",
    ],
  },
  {
    id: 18,
    title: "Customer Success Manager",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "Ensure our clients achieve maximum value from their energy systems and service plans. You'll build strong relationships with key accounts, provide ongoing support, and identify opportunities for additional services and upgrades.",
    responsibilities: [
      "Serve as the primary point of contact for assigned customer accounts",
      "Conduct regular check-ins and system performance reviews",
      "Identify and resolve customer concerns proactively",
      "Coordinate service and maintenance activities",
      "Identify opportunities for system upgrades and additional services",
    ],
    requirements: [
      "Bachelor's degree in Business, Communications, or related field",
      "3+ years of experience in customer success or account management",
      "Strong understanding of energy systems and services",
      "Excellent communication and relationship-building skills",
      "Experience with CRM systems and data analysis",
    ],
  },
  {
    id: 19,
    title: "Journeyman Plumber",
    department: "Plumbing",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description:
      "Join our team of skilled plumbers installing and servicing residential and commercial plumbing systems. You'll work on a variety of projects, from repairs and maintenance to new installations and system upgrades.",
    responsibilities: [
      "Install, repair, and maintain plumbing systems and fixtures",
      "Diagnose and troubleshoot plumbing issues",
      "Read and interpret plumbing plans and specifications",
      "Ensure all work meets code requirements and quality standards",
      "Mentor apprentice plumbers and provide technical guidance",
    ],
    requirements: [
      "Journeyman Plumber license in relevant state(s)",
      "3+ years of experience in residential and commercial plumbing",
      "Knowledge of plumbing codes and best practices",
      "Strong problem-solving and customer service skills",
      "Valid driver's license and clean driving record",
    ],
  },
  {
    id: 20,
    title: "Energy Storage Specialist",
    department: "Electrical",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Design and implement battery storage solutions for residential and commercial applications. You'll work with cutting-edge energy storage technologies to maximize renewable energy utilization and provide backup power capabilities.",
    responsibilities: [
      "Design battery storage systems integrated with solar and grid power",
      "Perform load analysis and system sizing calculations",
      "Configure battery management systems and controls",
      "Commission and troubleshoot energy storage installations",
      "Train clients and technicians on system operation and maintenance",
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering or related field",
      "3+ years of experience with battery storage systems",
      "Knowledge of major battery technologies and manufacturers",
      "Understanding of power electronics and control systems",
      "Experience with energy management software and monitoring platforms",
    ],
  },
]

// Benefits data
const benefits = [
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Competitive Compensation",
    description: "We offer industry-leading pay and performance-based bonuses to reward your hard work and dedication.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Comprehensive Healthcare",
    description:
      "Medical, dental, and vision coverage for you and your family, with company contributions to HSA plans.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Professional Development",
    description: "Ongoing training, certification support, and career advancement opportunities to help you grow.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Inclusive Culture",
    description: "Join a diverse team that values collaboration, innovation, and mutual respect in everything we do.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Employee Discounts",
    description: "Special pricing on all Sarxt Energy services and products for you and your immediate family.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Work-Life Balance",
    description: "Generous PTO, paid holidays, flexible scheduling options, and family leave policies.",
  },
]

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white mb-8">
              Build your career with Sarxt Energy and help create a sustainable future through innovative energy
              solutions.
            </p>
            <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Sarxt Energy?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Sarxt Energy, we're more than just an energy company. We're a team of passionate professionals
              dedicated to creating a sustainable future through innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center text-center">
                  {benefit.icon}
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to match your skills and career goals.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="solar">Solar</TabsTrigger>
              <TabsTrigger value="mechanical">HVAC</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <TabsTrigger value="plumbing">Plumbing</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {jobListings.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </TabsContent>

            <TabsContent value="solar" className="space-y-6">
              {jobListings
                .filter((job) => job.department === "Solar")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </TabsContent>

            <TabsContent value="mechanical" className="space-y-6">
              {jobListings
                .filter((job) => job.department === "Mechanical")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </TabsContent>

            <TabsContent value="electrical" className="space-y-6">
              {jobListings
                .filter((job) => job.department === "Electrical")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </TabsContent>

            <TabsContent value="plumbing" className="space-y-6">
              {jobListings
                .filter((job) => job.department === "Plumbing")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              {jobListings
                .filter((job) => job.department === "Sales")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We've designed a straightforward application process to help you find your place at Sarxt Energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Submit your application through our careers portal with your resume and cover letter.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Review</h3>
              <p className="text-gray-600">
                Our hiring team will review your application and reach out if there's a good match.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
              <p className="text-gray-600">
                Participate in interviews with the hiring manager and potential team members.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Welcome Aboard</h3>
              <p className="text-gray-600">Receive your offer and join our team of energy professionals!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company Culture</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Sarxt Energy, we believe that our people are our greatest asset. We foster a culture of innovation,
                collaboration, and continuous improvement.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're committed to diversity and inclusion, recognizing that different perspectives drive better
                solutions. Our team members enjoy a supportive environment where their ideas are valued and their growth
                is prioritized.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We celebrate successes together and learn from challenges as a team. If you're passionate about making a
                difference in the energy industry and want to work with like-minded professionals, Sarxt Energy is the
                place for you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=w1l9f"
                  alt="Team working on solar installation"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=4wu14"
                  alt="Team meeting"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=9ne1r"
                  alt="Technician working"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?key=6zeq9"
                  alt="Team celebration"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
              <p className="text-lg text-gray-700">
                We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you
                in mind for future opportunities.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>General Application</CardTitle>
                <CardDescription>
                  Fill out this form to submit your information for future consideration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input id="email" type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input id="phone" type="tel" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">
                      Department of Interest
                    </label>
                    <select id="department" className="w-full p-2 border border-gray-300 rounded-md" required>
                      <option value="">Select a department</option>
                      <option value="solar">Solar</option>
                      <option value="mechanical">Mechanical (HVAC)</option>
                      <option value="electrical">Electrical</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="sales">Sales</option>
                      <option value="admin">Administrative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-medium">
                      Resume
                    </label>
                    <input id="resume" type="file" className="w-full p-2 border border-gray-300 rounded-md" required />
                    <p className="text-xs text-gray-500">PDF, DOC, or DOCX files only. Max size: 5MB</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Cover Letter or Additional Information
                    </label>
                    <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" /> Submit Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

// Job Card Component
function JobCard({ job }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{job.title}</CardTitle>
            <CardDescription className="mt-1 flex items-center">
              <Briefcase className="h-4 w-4 mr-1" /> {job.department}
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" /> {job.location}
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-1" /> {job.salary}
          </div>
        </div>

        <p className="text-gray-700 mb-4">{job.description}</p>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {job.requirements.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t">
        <Button asChild className="w-full">
          <Link href={`/careers/apply?job=${job.id}`}>Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
