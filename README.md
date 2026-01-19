# Contract Management Platform (Frontend)

# contract-management-frontend

A simple contract management system built using the MERN stack that allows users to create reusable contract blueprints, generate contracts from them, and manage contract lifecycle with role-based actions (Approver vs Signer).

For backend refer to - https://github.com/Mohit8820/contract-management-backend/blob/main/README.md

# Setup Instructions

## Prerequisites

install these globally
Node.js (v18+ recommended)
npm

## Setup

download this repository as zip and extract it or clone it from the given link -https://github.com/Mohit8820/contract-management-frontend.git
open this folder - "contract-management-frontend" (in terminal : cd contract-management-frontend)

Create a ".env" file inside contract-management-frontend/:

and add your environment variables in this file as-
REACT_APP_API_URL=http://localhost:4000/api
this will help fronend call the backend running at port 4000

## Run below commands-

npm install
npm start

Frontend will start at: http://localhost:3000

# Frontend Architecture

## High-Level Structure

src/
├── components/ → Reusable UI building blocks
├── pages/ → Route-level screens
├── api.ts → Backend communication layer
├── types.ts → Centralized TypeScript models
├── App.tsx → App shell
├── AllRoutes.tsx → Route definitions
├── index.tsx → React bootstrap
└── index.css → Global styles

## Components Layer (src/components/)

Purpose:
Reusable, stateless or minimally stateful UI components.

components/
├── BlueprintForm.tsx
├── FieldBuilder.tsx
├── FieldRenderer.tsx
├── FieldRow.tsx
├── Header.tsx
├── StatusActions.tsx
└── StatusTimeline.tsx

Responsibilities
BlueprintForm : Create/edit blueprints
FieldBuilder : Add/remove blueprint fields
FieldRow : Single field row UI
FieldRenderer : Render contract fields dynamically
StatusActions : Role-based status buttons
StatusTimeline : Visual lifecycle progress
Header : App navigation

## Pages Layer (src/pages/)

Purpose:
Route-level containers responsible for data fetching, state, and business flow.

pages/
├── Blueprints.tsx
├── Dashboard.tsx
├── ContractDetail.tsx
└── AllRoutes.tsx

Responsibilities
Page : Responsibility
Dashboard : List contracts
Blueprints : Manage blueprints
ContractDetail : Contract editing & lifecycle
AllRoutes : Route mapping

## Role-Based Behavior

Since authentication was not required, the role is selected when opening a contract.
Role selection is stored in sessionStorage

# Assumptions

Authentication is out of scope
Signature is represented as typed text
