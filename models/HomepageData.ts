import mongoose, { Schema, Document, model } from "mongoose";

// Header & Footer
export interface IHeaderFooter {
  brand: string;
  tagline: string;
  description?: string;
}

// Service
export interface IService {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  image: string;
  alternativeText: string;
  href: string;
  popular?: boolean;
}

// Feature
export interface IFeature {
  iconKey: string;
  title: string;
  description: string;
}

// Stat
export interface IStat {
  number: string;
  label: string;
}

// Testimonial
export interface ITestimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// Contact
export interface IContact {
  phone: string;
  email: string;
  address: string;
}

// Homepage Data
export interface IHomepageData extends Document {
  header: IHeaderFooter;
  footer: IHeaderFooter;
  services: IService[];
  features: IFeature[];
  stats: IStat[];
  testimonials: ITestimonial[];
  contact: IContact;
}

const HeaderFooterSchema = new Schema<IHeaderFooter>({
  brand: { type: String, required: true },
  tagline: { type: String, required: true },
  description: String,
});

const ServiceSchema = new Schema<IService>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priceLabel: { type: String, required: true },
  image: { type: String, required: true },
  alternativeText: { type: String, required: true },
  href: { type: String, required: true },
  popular: Boolean,
});

const FeatureSchema = new Schema<IFeature>({
  iconKey: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const StatSchema = new Schema<IStat>({
  number: { type: String, required: true },
  label: { type: String, required: true },
});

const TestimonialSchema = new Schema<ITestimonial>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

const ContactSchema = new Schema<IContact>({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const HomepageDataSchema = new Schema<IHomepageData>({
  header: { type: HeaderFooterSchema, required: true },
  footer: { type: HeaderFooterSchema, required: true },
  services: { type: [ServiceSchema], required: true },
  features: { type: [FeatureSchema], required: true },
  stats: { type: [StatSchema], required: true },
  testimonials: { type: [TestimonialSchema], required: true },
  contact: { type: ContactSchema, required: true },
});

export default mongoose.models.HomepageData || model<IHomepageData>("HomepageData", HomepageDataSchema);
