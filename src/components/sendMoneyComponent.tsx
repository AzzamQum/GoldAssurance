"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";

export default function SendMoneySection() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !amount ||
      !currency ||
      !swiftCode ||
      !cardNumber ||
      !expiryDate ||
      !cvv
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Sending money:", {
      amount,
      currency,
      swiftCode,
      cardNumber,
      expiryDate,
      cvv,
    });
    // Reset form or show success message
  };

  return (
    <motion.section
      id="send-money"
      className="w-full py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <div className="container px-4 md:px-6 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Send Money Internationally
          </h2>
          <SignedIn>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      placeholder="Enter amount"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                        <SelectItem value="jpy">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="swift">Your Bank's SWIFT Code</Label>
                    <Input
                      id="swift"
                      placeholder="Enter SWIFT code"
                      value={swiftCode}
                      onChange={(e) => setSwiftCode(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Visa Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="CVV"
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" className="w-full">
                      Send Money
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </SignedIn>
          <SignedOut>
            <div className="text-center">
              <p className="mb-4">
                Please sign in to send money internationally.
              </p>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </motion.section>
  );
}
