"use client";
import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export default function FallDocument() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                First Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="First Name"
                name="first-name"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Last Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Last Name"
                name="last-name"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Your Email
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="name@email.com"
              name="email"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Your Message
            </Typography>
            <Textarea
              rows={6}
              color="gray"
              placeholder="Message"
              name="message"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button className="w-full" color="gray">
            Print Report
          </Button>
        </form>
      </div>
    </section>
  );
}
