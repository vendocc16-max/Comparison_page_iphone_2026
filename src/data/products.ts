// Product Data for iPhone Comparison
// This file will be populated with actual product data

import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    tagline: 'A new satisfsatisfying design',
    price: {
      amount: 11495,
      currency: 'SEK',
      formatted: 'fr. 11 495 kr',
    },
    colors: [
      { name: 'Black', hex: '#1d1d1f' },
      { name: 'White', hex: '#f5f5f7' },
      { name: 'Green', hex: '#394c38' },
      { name: 'Blue', hex: '#a7c1d9' },
      { name: 'Pink', hex: '#f4d2d0' },
    ],
    images: {
      frontBack: {
        small: 'images/contextual_iphone_17_front_back_small.png',
        small2x: 'images/contextual_iphone_17_front_back_small_2x.png',
        medium: 'images/contextual_iphone_17_front_back_medium.png',
        medium2x: 'images/contextual_iphone_17_front_back_medium_2x.png',
        large: 'images/contextual_iphone_17_front_back_large.png',
        large2x: 'images/contextual_iphone_17_front_back_large_2x.png',
      },
      chip: {
        small: 'images/contextual_iphone_17_chip_small.png',
        small2x: 'images/contextual_iphone_17_chip_small_2x.png',
        medium: 'images/contextual_iphone_17_chip_medium.png',
        medium2x: 'images/contextual_iphone_17_chip_medium_2x.png',
        large: 'images/contextual_iphone_17_chip_large.png',
        large2x: 'images/contextual_iphone_17_chip_large_2x.png',
      },
      camera: {
        small: 'images/contextual_iphone_17_camera_small.png',
        small2x: 'images/contextual_iphone_17_camera_small_2x.png',
        medium: 'images/contextual_iphone_17_camera_medium.png',
        medium2x: 'images/contextual_iphone_17_camera_medium_2x.png',
        large: 'images/contextual_iphone_17_camera_large.png',
        large2x: 'images/contextual_iphone_17_camera_large_2x.png',
      },
      side: {
        small: 'images/contextual_iphone_17_front_side_small.png',
        small2x: 'images/contextual_iphone_17_front_side_small_2x.png',
        medium: 'images/contextual_iphone_17_front_side_medium.png',
        medium2x: 'images/contextual_iphone_17_front_side_medium_2x.png',
        large: 'images/contextual_iphone_17_front_side_large.png',
        large2x: 'images/contextual_iphone_17_front_side_large_2x.png',
      },
    },
    categories: [
      {
        name: 'Display',
        specs: [
          { label: 'Size', value: '6.3"' },
          { label: 'Type', value: 'Super Retina XDR' },
          { label: 'Resolution', value: '2556 x 1179 pixels' },
          { label: 'ProMotion', value: false },
        ],
      },
      {
        name: 'Chip',
        specs: [
          { label: 'Processor', value: 'A19' },
          { label: 'Neural Engine', value: '16-core' },
        ],
      },
      {
        name: 'Camera',
        specs: [
          { label: 'Main', value: '48MP' },
          { label: 'Ultra Wide', value: '12MP' },
          { label: 'Optical Zoom', value: '2x' },
        ],
      },
    ],
    isNew: true,
  },
  {
    id: 'iphone-17-air',
    name: 'iPhone 17 Air',
    tagline: 'Air-thin. Air-light. Air-powerful.',
    price: {
      amount: 13995,
      currency: 'SEK',
      formatted: 'fr. 13 995 kr',
    },
    colors: [
      { name: 'Black', hex: '#1d1d1f' },
      { name: 'Starlight', hex: '#f0e4d3' },
    ],
    images: {
      frontBack: {
        small: 'images/contextual_iphone_17_air_front_back_alt_small.png',
        small2x: 'images/contextual_iphone_17_air_front_back_alt_small_2x.png',
        medium: 'images/contextual_iphone_17_air_front_back_alt_medium.png',
        medium2x: 'images/contextual_iphone_17_air_front_back_alt_medium_2x.png',
        large: 'images/contextual_iphone_17_air_front_back_alt_large.png',
        large2x: 'images/contextual_iphone_17_air_front_back_alt_large_2x.png',
      },
      chip: {
        small: 'images/contextual_iphone_17_air_chip_a19pro_small.png',
        small2x: 'images/contextual_iphone_17_air_chip_a19pro_small_2x.png',
        medium: 'images/contextual_iphone_17_air_chip_a19pro_medium.png',
        medium2x: 'images/contextual_iphone_17_air_chip_a19pro_medium_2x.png',
        large: 'images/contextual_iphone_17_air_chip_a19pro_large.png',
        large2x: 'images/contextual_iphone_17_air_chip_a19pro_large_2x.png',
      },
      camera: {
        small: 'images/contextual_iphone_17_air_front_camera_alt_small.png',
        small2x: 'images/contextual_iphone_17_air_front_camera_alt_small_2x.png',
        medium: 'images/contextual_iphone_17_air_front_camera_alt_medium.png',
        medium2x: 'images/contextual_iphone_17_air_front_camera_alt_medium_2x.png',
        large: 'images/contextual_iphone_17_air_front_camera_alt_large.png',
        large2x: 'images/contextual_iphone_17_air_front_camera_alt_large_2x.png',
      },
      side: {
        small: 'images/contextual_iphone_17_air_front_side_small.png',
        small2x: 'images/contextual_iphone_17_air_front_side_small_2x.png',
        medium: 'images/contextual_iphone_17_air_front_side_medium.png',
        medium2x: 'images/contextual_iphone_17_air_front_side_medium_2x.png',
        large: 'images/contextual_iphone_17_air_front_side_large.png',
        large2x: 'images/contextual_iphone_17_air_front_side_large_2x.png',
      },
    },
    categories: [
      {
        name: 'Display',
        specs: [
          { label: 'Size', value: '6.6"' },
          { label: 'Type', value: 'Super Retina XDR' },
          { label: 'Resolution', value: '2740 x 1260 pixels' },
          { label: 'ProMotion', value: true, highlight: true },
        ],
      },
      {
        name: 'Chip',
        specs: [
          { label: 'Processor', value: 'A19 Pro', highlight: true },
          { label: 'Neural Engine', value: '16-core' },
        ],
      },
      {
        name: 'Camera',
        specs: [
          { label: 'Main', value: '48MP' },
          { label: 'Front Camera', value: '24MP TrueDepth', highlight: true },
          { label: 'Optical Zoom', value: '2x' },
        ],
      },
      {
        name: 'Design',
        specs: [
          { label: 'Thickness', value: '5.5mm', highlight: true },
          { label: 'Weight', value: '149g', highlight: true },
        ],
      },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    tagline: 'The ultimate iPhone.',
    price: {
      amount: 15995,
      currency: 'SEK',
      formatted: 'fr. 15 995 kr',
    },
    colors: [
      { name: 'Black Titanium', hex: '#3c3c3d' },
      { name: 'White Titanium', hex: '#e3e3df' },
      { name: 'Natural Titanium', hex: '#beb4a8' },
      { name: 'Desert Titanium', hex: '#c2a27a' },
    ],
    images: {
      frontBack: {
        small: 'images/contextual_iphone_17_pro_front_back_small.png',
        small2x: 'images/contextual_iphone_17_pro_front_back_small_2x.png',
        medium: 'images/contextual_iphone_17_pro_front_back_medium.png',
        medium2x: 'images/contextual_iphone_17_pro_front_back_medium_2x.png',
        large: 'images/contextual_iphone_17_pro_front_back_large.png',
        large2x: 'images/contextual_iphone_17_pro_front_back_large_2x.png',
      },
      chip: {
        small: 'images/contextual_iphone_17_pro_chip_small.png',
        small2x: 'images/contextual_iphone_17_pro_chip_small_2x.png',
        medium: 'images/contextual_iphone_17_pro_chip_medium.png',
        medium2x: 'images/contextual_iphone_17_pro_chip_medium_2x.png',
        large: 'images/contextual_iphone_17_pro_chip_large.png',
        large2x: 'images/contextual_iphone_17_pro_chip_large_2x.png',
      },
      camera: {
        small: 'images/contextual_iphone_17_pro_camera_small.png',
        small2x: 'images/contextual_iphone_17_pro_camera_small_2x.png',
        medium: 'images/contextual_iphone_17_pro_camera_medium.png',
        medium2x: 'images/contextual_iphone_17_pro_camera_medium_2x.png',
        large: 'images/contextual_iphone_17_pro_camera_large.png',
        large2x: 'images/contextual_iphone_17_pro_camera_large_2x.png',
      },
      side: {
        small: 'images/contextual_iphone_17_pro_front_side_small.png',
        small2x: 'images/contextual_iphone_17_pro_front_side_small_2x.png',
        medium: 'images/contextual_iphone_17_pro_front_side_medium.png',
        medium2x: 'images/contextual_iphone_17_pro_front_side_medium_2x.png',
        large: 'images/contextual_iphone_17_pro_front_side_large.png',
        large2x: 'images/contextual_iphone_17_pro_front_side_large_2x.png',
      },
    },
    categories: [
      {
        name: 'Display',
        specs: [
          { label: 'Size', value: '6.3" / 6.9"' },
          { label: 'Type', value: 'Super Retina XDR' },
          { label: 'ProMotion', value: true, highlight: true },
          { label: 'Always-On', value: true, highlight: true },
        ],
      },
      {
        name: 'Chip',
        specs: [
          { label: 'Processor', value: 'A19 Pro', highlight: true },
          { label: 'Neural Engine', value: '16-core' },
          { label: 'GPU', value: '6-core', highlight: true },
        ],
      },
      {
        name: 'Camera',
        specs: [
          { label: 'Main', value: '48MP Fusion' },
          { label: 'Ultra Wide', value: '48MP', highlight: true },
          { label: 'Telephoto', value: '12MP 5x', highlight: true },
          { label: 'Optical Zoom', value: '5x', highlight: true },
        ],
      },
      {
        name: 'Pro Features',
        specs: [
          { label: 'Action Button', value: true, highlight: true },
          { label: 'ProRes Video', value: true, highlight: true },
          { label: 'USB 3', value: true, highlight: true },
        ],
      },
    ],
    isNew: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByIds = (ids: string[]): Product[] => {
  return products.filter((p) => ids.includes(p.id));
};
