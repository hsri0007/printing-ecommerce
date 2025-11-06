import React from "react";
import dbConnect from "@/lib/dbConnect";
import Quote from "@/models/Quote";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = {
  title: "Admin — Quotes",
  description: "All quote requests",
};

export const dynamic = 'force-dynamic';

export default async function QuotesPage() {
  await dbConnect();

  const quotes = await Quote.find({})
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Requests</h1>

      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Received</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Service</TableHead>
              <TableHead className="w-[40%]">Message</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {quotes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No quotes found.
                </TableCell>
              </TableRow>
            ) : (
              quotes.map((q: any) => (
                <TableRow key={q._id}>
                  <TableCell>
                    {new Date(q.createdAt || q._id.getTimestamp()).toLocaleString()}
                  </TableCell>
                  <TableCell>{q.name}</TableCell>
                  <TableCell>{q.phone}</TableCell>
                  <TableCell>{q.email}</TableCell>
                  <TableCell>{q.service}</TableCell>
                  <TableCell className="truncate max-w-[32rem]">{q.message}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}