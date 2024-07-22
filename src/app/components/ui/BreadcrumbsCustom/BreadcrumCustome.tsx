"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

const BreadcrumbsCustom = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbsCustom;
