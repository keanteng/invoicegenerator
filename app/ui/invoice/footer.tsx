'use client'

import { Text, } from '@chakra-ui/react'

export default function Footer() {
  return (
    <div>
      <Text fontSize = 'md'><b>Terms & Conditions</b></Text>
      <Text fontSize = 'sm'>
      Payment is due within 30 days from the invoice date. A late fee of 1.5% per month will be applied to overdue amounts. Please make payments via bank transfer to the details provided. For any disputes or inquiries regarding this invoice, contact us at [contact information]. Thank you for your prompt payment.
      </Text>
    </div>
  )
}