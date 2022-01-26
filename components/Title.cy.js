/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import { onlyOn, skipOn } from "@cypress/skip-test";
import Title from "./Title";

describe("Title", () => {
  it("should mount the component", () => {
    mount(<Title />);
  });

  it("should find Welcome to Next.js h1 title using xpath", () => {
    mount(<Title />);
    cy.xpath("//h1").should("have.text", "Welcome to Next.js!").skipOn("mac");
  });

  it("should have a class of title", () => {
    mount(<Title />);
    cy.xpath("//h1").should("have.class", "title");
    skipOn("mac");
  });

  onlyOn("mac", () => {
    onlyOn("chrome", () => {
      it("should have a link to Next.js", () => {
        mount(<Title />);
        cy.wait(2000);
        cy.xpath("//a")
          .should("have.text", "Next.js!")
          .should("have.attr", "href", "https://nextjs.org");
      });
    });
  });
});
