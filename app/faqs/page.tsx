import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavHeader from "@/components/nav-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQs | Londiani Building Stones",
  description: "Frequently asked questions about Londiani Building Stones products, services, and ordering process.",
}

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />

      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
              <p className="text-muted-foreground">
                Find answers to common questions about our products, services, and ordering process.
              </p>
            </div>

            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What types of stone products do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer a wide range of stone products including building stones, ballast, hardcore, machine cut
                  stones, sand, and quarry dust. Each product is available in various sizes and specifications to meet
                  different construction needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Do you deliver to all areas in Kenya?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we deliver to all areas in Kenya. We have a fleet of trucks that ensure timely delivery of
                  materials to your construction site, regardless of location. Delivery charges may vary depending on
                  the distance and quantity of materials ordered.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">How do I place an order?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can place an order by contacting us through our website's contact form, calling our office
                  directly, or visiting our quarry site in Londiani. We recommend getting a quote first to understand the
                  pricing for your specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">What is the minimum order quantity?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our minimum order quantity varies depending on the product. For most products, we can accommodate
                  orders starting from one truck load. For smaller quantities, we recommend visiting our quarry site
                  directly or contacting us to discuss your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">How long does delivery take?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Delivery time depends on your location and the quantity ordered. For locations within Kericho and its
                  environs, we typically deliver within 24-48 hours after order confirmation. For other areas, delivery
                  may take 2-5 business days. We'll provide you with a specific timeframe when you place your order.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium">Do you offer consultation services?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer consultation services to help you determine the best materials for your specific
                  construction project. Our team of experienced professionals can provide expert advice on material
                  selection, quantities needed, and best practices for usage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept various payment methods including bank transfers, mobile money (M-Pesa), and cash payments.
                  For large orders, we can discuss payment terms and installment options. All payments should be made to
                  our official company accounts only.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium">
                  Do you offer discounts for bulk orders?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer discounts for bulk orders. The discount rate depends on the quantity and type of
                  products ordered. Please contact our sales team for a customized quote for your bulk order.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-medium">
                  How do you ensure the quality of your products?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We have a rigorous quality control process that includes regular testing of our materials to ensure
                  they meet industry standards. Our quarrying operations use modern equipment and techniques to extract
                  high-quality natural stones. We also welcome clients to inspect the materials before delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-medium">Can I visit your quarry site?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you're welcome to visit our quarry site in Londiani, Kericho County. This gives you an opportunity to
                  see our operations firsthand and inspect the materials before making a purchase. Please contact us in
                  advance to schedule a visit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                If you couldn't find the answer to your question, please don't hesitate to contact us. Our team is ready
                to assist you with any inquiries you may have.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="tel:+254700000000">Call Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

