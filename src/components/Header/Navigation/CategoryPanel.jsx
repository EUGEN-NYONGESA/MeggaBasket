import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[15px] font-[500] flex justify-between items-center">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {/* Supermarket Category */}
          <CategoryItem
            index={0}
            label="Supermarket"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Groceries */}
            <CategoryItem
              index={1}
              label="Groceries"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/fruits" label="Fruits" />
              <SubCategoryItem to="/vegetables" label="Vegetables" />
              <SubCategoryItem to="/organic-produce" label="Organic Produce" />
            </CategoryItem>

            {/* Dairy & Eggs */}
            <CategoryItem
              index={2}
              label="Dairy & Eggs"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/fresh-milk" label="Fresh Milk" />
              <SubCategoryItem to="/powdered-milk" label="Powdered Milk" />
              <SubCategoryItem to="/flavored-milk" label="Flavored Milk" />
              <SubCategoryItem to="/cheese" label="Cheese" />
              <SubCategoryItem
                to="/butter-margarine"
                label="Butter & Margarine"
              />
              <SubCategoryItem to="/yogurt" label="Yogurt" />
              <SubCategoryItem to="/eggs" label="Eggs" />
            </CategoryItem>

            {/* Meat, Poultry & Seafood */}
            <CategoryItem
              index={3}
              label="Meat, Poultry & Seafood"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/Beef" label="Beef" />
              <SubCategoryItem to="/Mutton" label="Mutton" />
              <SubCategoryItem to="/Lamb" label="Lamb" />
              <SubCategoryItem to="/Pork" label="Pork" />
              <SubCategoryItem to="/Chicken" label="Chicken" />
              <SubCategoryItem to="/fresh-seafood" label="Fresh Seafood" />
              <SubCategoryItem to="/processed-meats" label="Processed meats" />
            </CategoryItem>

            {/* Beverages */}
            <CategoryItem
              index={4}
              label="Beverages"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/Soft-drinks" label="Soft drinks" />
              <SubCategoryItem to="/juices" label="Juices" />
              <SubCategoryItem to="/tea-coffee" label="Tea & Coffee" />
              <SubCategoryItem to="/energy-drinks" label="Energy Drinks" />
              <SubCategoryItem to="/Water" label="Mineral/Sparkling Water" />
            </CategoryItem>

            {/* Snacks & Confectionery */}
            <CategoryItem
              index={5}
              label="Snacks & Confectioner"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/bites-crisps" label="Bites & Crisps" />
              <SubCategoryItem to="/chocolates" label="Chocolates" />
              <SubCategoryItem to="/candy-gummies" label="Candy & Gummies" />
              <SubCategoryItem to="/popcorn-nuts" label="Popcorn & Nuts" />
            </CategoryItem>

            {/* Grains & Rice */}
            <CategoryItem
              index={6}
              label="Grains & Rice"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/rice" label="Rice" />
              <SubCategoryItem to="/pasta-noodless" label="Pasta & Noodles" />
              <SubCategoryItem to="/cereals-oats" label="Cereals & Oats" />
              <SubCategoryItem to="/maize-flour" label="Maize Flour" />
              <SubCategoryItem to="/baking-flour" label="Baking Flour" />
              <SubCategoryItem to="/baking-mixes" label="Baking Mixes" />
            </CategoryItem>

            {/* Canned & Packaged Foods */}
            <CategoryItem
              index={7}
              label="Canned & Packaged Food"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/canned-meat" label="Canned Meat" />
              <SubCategoryItem to="/canned-seafood" label="Canned Seafood" />
              <SubCategoryItem
                to="/canned-vegetables"
                label="Canned Vegetables"
              />
              <SubCategoryItem to="/canned-fruits" label="Canned Fruits" />
              <SubCategoryItem
                to="/soup-noodles"
                label="Soups & Noodles
"
              />
              <SubCategoryItem to="/ready-meals" label="Ready Meals" />
            </CategoryItem>

            {/* Frozen Foods */}
            <CategoryItem
              index={8}
              label="Frozen Food"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/ice-cream-desserts"
                label="Ice Cream & Desserts"
              />
              <SubCategoryItem to="/canned-seafood" label="Canned Seafood" />
              <SubCategoryItem to="/pizzas-snacks" label="Pizzas & Snacks" />
            </CategoryItem>

            {/* Health & Wellness */}
            <CategoryItem
              index={9}
              label="Health & Wellness"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/organic-gluten-free"
                label="Organic & Gluten-Free"
              />
              <SubCategoryItem to="/canned-seafood" label="Canned Seafood" />
              <SubCategoryItem
                to="/vitamins-supplements"
                label="Vitamins & Supplements"
              />
              <SubCategoryItem
                to="/herbal-detox-drinks"
                label="Herbal & Detox Drinks"
              />
              <SubCategoryItem
                to="/meal-replacements"
                label="Meal Replacements"
              />
              <SubCategoryItem to="/protein-powder" label="Protein Powder" />
            </CategoryItem>

            {/* Personal Care & Hygiene */}
            <CategoryItem
              index={10}
              label="Personal Care & Hygiene"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/skin-care" label="Skin Care" />
              <SubCategoryItem to="/hair-care" label="Hair Care" />
              <SubCategoryItem to="/oral-care" label="Oral Care" />
              <SubCategoryItem
                to="/feminine-hygiene"
                label="Feminine Hygiene"
              />
              <SubCategoryItem
                to="/shaving-rooming-products"
                label="Shaving & Grooming"
              />
            </CategoryItem>

            {/* Household & Cleaning Supplies */}
            <CategoryItem
              index={11}
              label="Household & Cleaning"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/detergents-softeners"
                label="Detergents & Softeners"
              />
              <SubCategoryItem
                to="/dishwashing-products"
                label="Dishwashing products"
              />
              <SubCategoryItem to="/air-fresheners" label="Air Fresheners" />
              <SubCategoryItem
                to="/bathroom-floor-cleaners"
                label="Bathroom/Floor Cleaners"
              />
              <SubCategoryItem to="/trash-bags" label="Trash Bags" />
              <SubCategoryItem to="/disinfectants" label="Disinfectants" />
            </CategoryItem>

            {/* Baby & Kids Essentials */}
            <CategoryItem
              index={12}
              label="Baby & Kids Essentials"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/baby-food-formula"
                label="Baby Food & Formula"
              />
              <SubCategoryItem to="/diapers-wipes" label="Diapers & Wipes" />
              <SubCategoryItem to="/air-fresheners" label="Air Fresheners" />
              <SubCategoryItem to="/baby-skincare" label="Baby Skincare" />
              <SubCategoryItem to="/trash-bags" label="Trash Bags" />
              <SubCategoryItem
                to="/baby-toys-accessories"
                label="Baby Toys & Accessories"
              />
            </CategoryItem>

            {/* Pet Supplies */}
            <CategoryItem
              index={13}
              label="Pet Supplies"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/dog-food" label="Dog Food" />
              <SubCategoryItem to="/cat-food" label="Cat Food" />
              <SubCategoryItem to="/fish-food" label="Fish Food" />
              <SubCategoryItem to="/bird-food" label="Bird Food" />
              <SubCategoryItem to="/pet-treats" label="Pet Treats" />
              <SubCategoryItem
                to="/pet-grooming-hygiene"
                label="Pet Grooming & Hygiene"
              />
              <SubCategoryItem
                to="/pet-toys-accessories"
                label="Pet Toys & Accessories"
              />
            </CategoryItem>

            {/* Stationery & Office Supplies */}
            <CategoryItem
              index={14}
              label="Stationery/Office Supplies"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/notebooks-planners"
                label="Notebooks & Planners"
              />
              <SubCategoryItem
                to="/pens-markers-highlighters"
                label="Pens/Markers/Highlighters"
              />
              <SubCategoryItem
                to="/envelopes-sticky-notes"
                label="Envelopes/Sticky Notes"
              />
              <SubCategoryItem
                to="/school-art Supplies"
                label="School & Art Supplies"
              />
              <SubCategoryItem
                to="/pet-grooming-hygiene"
                label="Pet Grooming & Hygiene"
              />
              <SubCategoryItem
                to="/pet-toys-accessories"
                label="Pet Toys & Accessories"
              />
            </CategoryItem>

            {/* Electronics Appliances */}
            <CategoryItem
              index={15}
              label="Electronics Appliances"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/kitchen-appliances"
                label="Kitchen Appliances"
              />
              <SubCategoryItem
                to="/batteries-chargers"
                label="Batteries & Chargers"
              />
              <SubCategoryItem
                to="/personal-care-gadgets"
                label="Personal Care Gadgets"
              />
              <SubCategoryItem to="/light-bulbs" label="Light Bulbs" />
              <SubCategoryItem to="/extension-cords" label="Extension Cords" />
            </CategoryItem>

            {/* Pet Supplies */}
            <CategoryItem
              index={16}
              label="Pet Supplies"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/dog-food" label="Dog Food" />
              <SubCategoryItem to="/cat-food" label="Cat Food" />
              <SubCategoryItem to="/fish-food" label="Fish Food" />
              <SubCategoryItem to="/bird-food" label="Bird Food" />
              <SubCategoryItem to="/pet-treats" label="Pet Treats" />
              <SubCategoryItem
                to="/pet-grooming-hygiene"
                label="Pet Grooming & Hygiene"
              />
              <SubCategoryItem
                to="/pet-toys-accessories"
                label="Pet Toys & Accessories"
              />
            </CategoryItem>

            {/* Stationery & Office Supplies */}
            <CategoryItem
              index={17}
              label="Stationery/Office Supplies"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/notebooks-planners"
                label="Notebooks & Planners"
              />
              <SubCategoryItem
                to="/pens-markers-highlighters"
                label="Pens/Markers/Highlighters"
              />
              <SubCategoryItem
                to="/envelopes-sticky-notes"
                label="Envelopes/Sticky Notes"
              />
              <SubCategoryItem
                to="/school-art Supplies"
                label="School & Art Supplies"
              />
              <SubCategoryItem
                to="/pet-grooming-hygiene"
                label="Pet Grooming & Hygiene"
              />
              <SubCategoryItem
                to="/pet-toys-accessories"
                label="Pet Toys & Accessories"
              />
            </CategoryItem>

            {/* Home & Kitchen Essentials */}
            <CategoryItem
              index={18}
              label="Home & Kitchen Essentials"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/cookware-utensils"
                label="Cookware & Utensils"
              />
              <SubCategoryItem to="/food-containers" label="Food Containers" />
              <SubCategoryItem to="/tableware" label="Tableware" />
              <SubCategoryItem to="/bedding-towels" label="Bedding & Towels" />
              <SubCategoryItem to="/pillows" label="pillows" />
            </CategoryItem>

            {/* Liquor Store */}
            <CategoryItem
              index={19}
              label="Liquor Store"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/wine" label="Wine" />
              <SubCategoryItem to="/beer" label="Beer" />
              <SubCategoryItem to="/whiskey" label="Whiskey" />
              <SubCategoryItem to="/vodka" label="Vodka" />
              <SubCategoryItem to="/spirits" label="Spirits" />
              <SubCategoryItem
                to="/cigarettes-lighters"
                label="Cigarettes/Lighters"
              />
            </CategoryItem>

            {/* Party & Occasion Items */}
            <CategoryItem
              index={20}
              label="Party & Occasion Items"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/holiday-decorations"
                label="Holiday Decorations"
              />
              <SubCategoryItem
                to="/bags-suite-cases"
                label="Bags & Suite Cases"
              />
              <SubCategoryItem to="/gift-baskets" label="Gift Baskets" />
              <SubCategoryItem to="/party-supplies" label="Party Supplies" />
            </CategoryItem>

            {/* Add other Electronics subcategories here... */}
          </CategoryItem>

          {/* Electronics Category */}
          <CategoryItem
            index={21}
            label="Electronics"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Mobile Phones & Accessories */}
            <CategoryItem
              index={22}
              label="Phones & Accessories"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/android-phones" label="Android Phones" />
              <SubCategoryItem
                to="/new-android-phones"
                label="New Android Phones"
              />
              <SubCategoryItem
                to="/refurbished-android-phones"
                label="Refurbished Phones"
              />
              <SubCategoryItem to="/iphones" label="iPhones" />
              <SubCategoryItem to="/new-iphones" label="New iPhones" />
              <SubCategoryItem
                to="/refurbished-iphones"
                label="Refurbished iPhones"
              />
              <SubCategoryItem
                to="/phone-cases-covers"
                label="Phone Cases & Covers"
              />
              <SubCategoryItem
                to="/screen-protectors"
                label="Screen Protectors"
              />
              <SubCategoryItem
                to="/chargers-adapters"
                label="Chargers & Adapters"
              />
              <SubCategoryItem to="/power-banks" label="Power Banks" />
              <SubCategoryItem
                to="/wireless-earbuds-headphones"
                label="Earbuds & Headphones"
              />
              <SubCategoryItem
                to="/smartwatches-wearables"
                label="Smartwatches/Wearables"
              />
              <SubCategoryItem
                to="/phone-holders-mounts"
                label="Phone Holders & Mounts"
              />
              <SubCategoryItem
                to="/replacement-parts-repairs"
                label="Phone Repair Parts"
              />
            </CategoryItem>

            {/* Laptops & Computers */}
            <CategoryItem
              index={23}
              label="Laptops & Computers"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/macbooks" label="MacBooks" />
              <SubCategoryItem to="/new-macbooks" label="New MacBooks" />
              <SubCategoryItem
                to="/refurbished-macbooks"
                label="Refurbished MacBooks"
              />
              <SubCategoryItem to="/windows-laptops" label="Windows Laptops" />
              <SubCategoryItem
                to="/new-windows-laptops"
                label="New Windows Laptops"
              />
              <SubCategoryItem
                to="/refurbished-windows-laptops"
                label="Refurbished Laptops"
              />
              <SubCategoryItem
                to="/desktop-computers"
                label="Desktop Computers"
              />
              <SubCategoryItem
                to="/computer-monitors"
                label="Computer Monitors"
              />
              <SubCategoryItem to="/keyboards-mice" label="Keyboards & Mice" />
              <SubCategoryItem
                to="/laptop-bags-sleeves"
                label="Laptop Bags & Sleeves"
              />
              <SubCategoryItem
                to="/external-hard-drives-ssds"
                label="Hard Drives & SSDs"
              />
              <SubCategoryItem
                to="/usb-flash-drives"
                label="USB Flash Drives"
              />
              <SubCategoryItem to="/memory-cards" label="Memory Cards" />
              <SubCategoryItem
                to="/laptop-chargers-batteries"
                label="Chargers & Batteries"
              />
              <SubCategoryItem
                to="/cooling-pads-stands"
                label="Cooling Pads & Stands"
              />
            </CategoryItem>

            {/* Tablets & E-Readers */}
            <CategoryItem
              index={24}
              label="Tablets & E-Readers"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/new-tablets" label="New Tablets" />
              <SubCategoryItem
                to="/refurbished-tablets"
                label="Refurbished Tablets"
              />
              <SubCategoryItem to="/ipads" label="iPads" />
              <SubCategoryItem to="/android-tablets" label="Android Tablets" />
              <SubCategoryItem to="/stylus-pens-tablet" label="Stylus Pens" />
              <SubCategoryItem to="/keyboards" label="Tablet Keyboards" />
              <SubCategoryItem to="/e-readers" label="E-Readers" />
            </CategoryItem>

            {/* Gaming & Accessories */}
            <CategoryItem
              index={25}
              label="Gaming & Accessories"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/gaming-laptops-pcs"
                label="Gaming Laptops & PCs"
              />
              <SubCategoryItem to="/gaming-consoles" label="Gaming Consoles" />
              <SubCategoryItem
                to="/gaming-controllers-keyboards"
                label="Controllers & Keyboards"
              />
              <SubCategoryItem to="/vr-headsets" label="VR Headsets" />
              <SubCategoryItem
                to="/gaming-chairs-desks"
                label="Gaming Chairs & Desks"
              />
              <SubCategoryItem
                to="/streaming-capture-cards"
                label="Streaming/Capture Cards"
              />
              <SubCategoryItem to="/gaming-monitors" label="Gaming Monitors" />
              <SubCategoryItem
                to="/game-discs-digital-codes"
                label="Game Discs/Digital Codes"
              />
            </CategoryItem>

            {/* Audio & Headphones */}
            <CategoryItem
              index={26}
              label="Audio & Headphones"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/bluetooth-speakers"
                label="Bluetooth Speakers"
              />
              <SubCategoryItem
                to="/home-theater-systems"
                label="Home Theater Systems"
              />
              <SubCategoryItem to="/headphones" label="Headphones" />
              <SubCategoryItem
                to="/earbuds-earphones"
                label="Earbuds & Earphones"
              />
              <SubCategoryItem
                to="/soundbars-subwoofers"
                label="Soundbars & Subwoofers"
              />
              <SubCategoryItem to="/microphones" label="Microphones" />
            </CategoryItem>

            {/* Add other Electronics subcategories here... */}
          </CategoryItem>

          {/* Kitchen Category */}
          <CategoryItem
            index={30}
            label="Kitchen"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Kitchen Appliances */}
            <CategoryItem
              index={31}
              label="Kitchen Appliances"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/blenders" label="Blenders" />
              <SubCategoryItem
                to="/food-processors-choppers"
                label="Food Processors/Choppers"
              />
              <SubCategoryItem
                to="/juicers-extractors"
                label="Juicers & Extractors"
              />
              <SubCategoryItem to="/coffee-makers" label="Coffee Makers" />
              <SubCategoryItem
                to="/electric-kettles"
                label="Electric Kettles"
              />
              <SubCategoryItem
                to="/rice-cookers-steamers"
                label="Rice Cookers & Steamers"
              />
              <SubCategoryItem
                to="/air-fryers-deep-fryers"
                label="Air & Deep Fryers"
              />
              <SubCategoryItem
                to="/toasters-sandwich-makers"
                label="Toasters/Sandwich Makers"
              />
              <SubCategoryItem
                to="/microwaves-ovens"
                label="Microwaves & Ovens"
              />
              <SubCategoryItem
                to="/induction-cooktops-stoves"
                label="Induction Cooktops/Stoves"
              />
              <SubCategoryItem
                to="/slow-cookers-multi-cookers"
                label="Slow & Multi Cookers"
              />
              <SubCategoryItem to="/dishwashers" label="Dishwashers" />
              <SubCategoryItem
                to="/water-purifiers-dispensers"
                label="Water Purifiers/Dispensers"
              />
            </CategoryItem>

            {/* Cookware & Bakeware */}
            <CategoryItem
              index={32}
              label="Cookware & Bakeware"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/pots-pans" label="Pots & Pans" />
              <SubCategoryItem
                to="/casseroles-dutch-ovens"
                label="Casseroles & Dutch Ovens"
              />
              <SubCategoryItem
                to="/pressure-cookers"
                label="Pressure Cookers"
              />
              <SubCategoryItem
                to="/woks-stir-fry-pans"
                label="Woks & Stir-Fry Pans"
              />
              <SubCategoryItem
                to="/baking-trays-cake-pans"
                label="Baking Trays & Cake Pans"
              />
              <SubCategoryItem
                to="/muffin-cupcake-trays"
                label="Muffin & Cupcake Trays"
              />
              <SubCategoryItem
                to="/pizza-stones-trays"
                label="Pizza Stones & Trays"
              />
              <SubCategoryItem
                to="/measuring-cups-spoons"
                label="Measuring Cups & Spoons"
              />
              <SubCategoryItem to="/mixing-bowls" label="Mixing Bowls" />
              <SubCategoryItem
                to="/baking-equipment"
                label="Baking Equipment"
              />
            </CategoryItem>

            {/* Kitchen Utensils & Tools */}
            <CategoryItem
              index={33}
              label="Kitchen Utensils & Tools"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/knives-knife-sets"
                label="Knives & Knife Sets"
              />
              <SubCategoryItem to="/cutting-boards" label="Cutting Boards" />
              <SubCategoryItem
                to="/peelers-graters-zesters"
                label="Peelers, Graters & Zesters"
              />
              <SubCategoryItem to="/spatulas-tongs" label="Spatulas & Tongs" />
              <SubCategoryItem to="/whisks-mashers" label="Whisks & Mashers" />
              <SubCategoryItem
                to="/measuring-cups-spoons"
                label="Measuring Cups & Spoons"
              />
              <SubCategoryItem
                to="/colanders-strainers"
                label="Colanders & Strainers"
              />
              <SubCategoryItem
                to="/can-bottle-openers"
                label="Can & Bottle Openers"
              />
              <SubCategoryItem
                to="/kitchen-scissors-shears"
                label="Kitchen Scissors & Shears"
              />
              <SubCategoryItem
                to="/meat-tenderizers"
                label="Meat Tenderizers"
              />
              <SubCategoryItem
                to="/marinade-injectors"
                label="Marinade Injectors"
              />
            </CategoryItem>

            {/* Tableware & Dining Essentials */}
            <CategoryItem
              index={34}
              label="Tableware & Dining"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/dinner-sets-plates"
                label="Dinner Sets & Plates"
              />
              <SubCategoryItem
                to="/bowls-serving-dishes"
                label="Bowls & Serving Dishes"
              />
              <SubCategoryItem to="/cutlery-sets" label="Cutlery Sets" />
              <SubCategoryItem to="/glasses-mugs" label="Glasses & Mugs" />
              <SubCategoryItem
                to="/table-mats-coasters"
                label="Table Mats & Coasters"
              />
              <SubCategoryItem
                to="/serving-trays-platters"
                label="Serving Trays & Platters"
              />
              <SubCategoryItem
                to="/salt-pepper-shakers"
                label="Salt & Pepper Shakers"
              />
              <SubCategoryItem
                to="/water-jugs-pitchers"
                label="Water Jugs & Pitchers"
              />
            </CategoryItem>

            {/* Food Storage & Organization */}
            <CategoryItem
              index={35}
              label="Food Storage"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/food-containers" label="Food Containers" />
              <SubCategoryItem
                to="/spice-racks-organizers"
                label="Spice Racks & Organizers"
              />
              <SubCategoryItem to="/bread-boxes" label="Bread Boxes" />
              <SubCategoryItem
                to="/water-bottles-flasks"
                label="Water Bottles & Flasks"
              />
              <SubCategoryItem to="/lunch-boxes" label="Lunch Boxes" />
              <SubCategoryItem
                to="/refrigerator-storage"
                label="Refrigerator Storage"
              />
              <SubCategoryItem
                to="/cling-film-aluminum-foil"
                label="Cling Film & Aluminum Foil"
              />
              <SubCategoryItem
                to="/kitchen-canisters-jars"
                label="Kitchen Canisters & Jars"
              />
            </CategoryItem>

            {/* Cleaning & Maintenance */}
            <CategoryItem
              index={36}
              label="Cleaning & Maintenance"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/detergents-soaps"
                label="Detergents & Soaps"
              />
              <SubCategoryItem
                to="/scrubbers-sponges"
                label="Scrubbers & Sponges"
              />
              <SubCategoryItem
                to="/garbage-bins-trash-bags"
                label="Garbage Bins & Trash Bags"
              />
              <SubCategoryItem
                to="/cleaning-cloths-towels"
                label="Cleaning Cloths & Towels"
              />
              <SubCategoryItem to="/air-fresheners" label="Air Fresheners" />
            </CategoryItem>

            {/* Add other Kitchen subcategories here... */}
          </CategoryItem>

          {/* Furniture Category */}
          <CategoryItem
            index={40}
            label="Furniture"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Living Room Furniture */}
            <CategoryItem
              index={41}
              label="Living Room Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/sofas-couches" label="Sofas & Couches" />
              <SubCategoryItem
                to="/recliners-lounge-chairs"
                label="Recliners & Lounge Chairs"
              />
              <SubCategoryItem
                to="/coffee-tables-side-tables"
                label="Coffee & Side Tables"
              />
              <SubCategoryItem
                to="/tv-stands-media"
                label="TV Stands & Media"
              />
              <SubCategoryItem
                to="/book-display-shelves"
                label="Books & Display Shelves"
              />
              <SubCategoryItem to="/ottomans-poufs" label="Ottomans & Poufs" />
              <SubCategoryItem
                to="/entertainment-units"
                label="Entertainment Units"
              />
              <SubCategoryItem
                to="/room-dividers-partitions"
                label="Room Dividers & Partitions"
              />
            </CategoryItem>

            {/* Bedroom Furniture */}
            <CategoryItem
              index={42}
              label="Bedroom Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/beds" label="Beds" />
              <SubCategoryItem
                to="/mattresses-bed-frames"
                label="Mattresses & Bed Frames"
              />
              <SubCategoryItem to="/nightstands" label="Nightstands" />
              <SubCategoryItem to="/bedside-tables" label="Bedside Tables" />
              <SubCategoryItem
                to="/wardrobes-closets"
                label="Wardrobes & Closets"
              />
              <SubCategoryItem to="/dressers" label="Dressers" />
              <SubCategoryItem
                to="/chest-of-drawers"
                label="Chest of Drawers"
              />
              <SubCategoryItem
                to="/makeup-vanities-mirrors"
                label="Makeup Vanities & Mirrors"
              />
              <SubCategoryItem
                to="/bunk-beds-loft-beds"
                label="Bunk Beds & Loft Beds"
              />
              <SubCategoryItem
                to="/underbed-drawers"
                label="Underbed Drawers"
              />
              <SubCategoryItem to="/storage-beds" label="Storage Beds" />
            </CategoryItem>

            {/* Dining Room Furniture */}
            <CategoryItem
              index={43}
              label="Dining Room Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/dining-tables" label="Dining Tables" />
              <SubCategoryItem
                to="/dining-chairs-benches"
                label="Dining Chairs & Benches"
              />
              <SubCategoryItem to="/counter-chairs" label="Counter Chairs" />
              <SubCategoryItem to="/bar-stools" label="Bar Stools" />
              <SubCategoryItem
                to="/china-cabinets-buffets"
                label="China Cabinets & Buffets"
              />
              <SubCategoryItem to="/sideboards" label="Sideboards" />
            </CategoryItem>

            {/* Office & Study Furniture */}
            <CategoryItem
              index={44}
              label="Office & Study Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/office-desks-workstations"
                label="Office Desks/Workstations"
              />
              <SubCategoryItem
                to="/office-chairs-ergonomic-chairs"
                label="Office & Ergonomic Chairs"
              />
              <SubCategoryItem
                to="/bookshelves-file-cabinets"
                label="Bookshelves & Cabinets"
              />
              <SubCategoryItem
                to="/conference-tables"
                label="Conference Tables"
              />
              <SubCategoryItem
                to="/meeting-room-furniture"
                label="Meeting Room Furniture"
              />
              <SubCategoryItem
                to="/standing-desks-adjustable-desks"
                label="Standing/Adjustable Desks"
              />
              <SubCategoryItem to="/lounge-seating" label="Lounge Seating" />
              <SubCategoryItem to="/reception-desks" label="Reception Desks" />
            </CategoryItem>

            {/* Outdoor & Patio Furniture */}
            <CategoryItem
              index={45}
              label="Outdoor & Patio Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/patio-tables-chairs"
                label="Patio Tables & Chairs"
              />
              <SubCategoryItem
                to="/garden-benches-swings"
                label="Garden Benches & Swings"
              />
              <SubCategoryItem to="/outdoor-sofas" label="Outdoor Sofas" />
              <SubCategoryItem to="/daybeds" label="Daybeds" />
              <SubCategoryItem
                to="/umbrellas-shade-canopies"
                label="Umbrellas/Shade"
              />
              <SubCategoryItem to="/picnic-tables" label="Picnic Tables" />
              <SubCategoryItem to="/folding-chairs" label="Folding Chairs" />
              <SubCategoryItem to="/hanging-chairs" label="Hanging Chairs" />
              <SubCategoryItem to="/hammocks" label="Hammocks" />
            </CategoryItem>

            {/* Kids’ Furniture */}
            <CategoryItem
              index={46}
              label="Kids’ Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/kids-beds-cribs"
                label="Kids’ Beds & Cribs"
              />
              <SubCategoryItem
                to="/study-desks-chairs"
                label="Study Desks & Chairs"
              />
              <SubCategoryItem to="/toy-storage" label="Toy Storage" />
              <SubCategoryItem
                to="/playroom-tables-chairs"
                label="Playroom Tables & Chairs"
              />
              <SubCategoryItem to="/changing-tables" label="Changing Tables" />
              <SubCategoryItem to="/dressers" label="Dressers" />
            </CategoryItem>

            {/* Storage & Organization */}
            <CategoryItem
              index={47}
              label="Storage & Organization"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/shoe-racks" label="Shoe Racks" />
              <SubCategoryItem
                to="/storage-cabinets"
                label="Storage Cabinets"
              />
              <SubCategoryItem
                to="/closet-organizers"
                label="Closet Organizers"
              />
              <SubCategoryItem to="/shelving-units" label=" Shelving Units" />
              <SubCategoryItem
                to="/coat-stands-wall-hooks"
                label="Coat Stands & Wall Hooks"
              />
              <SubCategoryItem to="/folding-tables" label="Folding Tables" />
              <SubCategoryItem
                to="/stackable-chairs"
                label="Stackable Chairs"
              />
              <SubCategoryItem
                to="/storage-boxes-bins"
                label="Storage Boxes & Bins"
              />
            </CategoryItem>

            {/* Home Decor & Accessories */}
            <CategoryItem
              index={48}
              label="Home Decor & Accessories"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/mirrors-wall-decor"
                label="Mirrors & Wall Decor"
              />
              <SubCategoryItem to="/rugs-carpets" label="Rugs & Carpets" />
              <SubCategoryItem
                to="/curtains-blinds"
                label="Curtains & Blinds"
              />
              <SubCategoryItem
                to="/decorative-shelves"
                label="Decorative Shelves"
              />
              <SubCategoryItem
                to="/lamps-lighting-fixtures"
                label="Lamps & Lighting Fixtures"
              />
            </CategoryItem>

            {/* Second-Hand Furniture Specials */}
            <CategoryItem
              index={49}
              label="Second-Hand Furniture"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/antique-vintage"
                label="Antique & Vintage"
              />
              <SubCategoryItem
                to="/hotel-liquidation-furniture"
                label="Hotel Liquidation Furniture"
              />
              <SubCategoryItem
                to="/office-business-clearance"
                label="Office/Business Clearance"
              />
              <SubCategoryItem
                to="/used-home-furniture"
                label="Used Home Furniture"
              />
              <SubCategoryItem
                to="/repurposed-upcycled"
                label="Repurposed & Upcycled"
              />
            </CategoryItem>
          </CategoryItem>

          <CategoryItem
            index={60}
            label="Fashion"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Men’s Fashion */}
            <CategoryItem
              index={61}
              label="Men’s Fashion"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              {/* Clothing */}
              <CategoryItem
                index={611}
                label="Clothing"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/mens-t-shirts-polos"
                  label="T-Shirts & Polos"
                />
                <SubCategoryItem
                  to="/mens-shirts"
                  label="Shirts (Casual, Formal)"
                />
                <SubCategoryItem
                  to="/mens-hoodies-sweatshirts"
                  label="Hoodies & Sweatshirts"
                />
                <SubCategoryItem
                  to="/mens-jackets-coats"
                  label="Jackets & Coats"
                />
                <SubCategoryItem
                  to="/mens-suits-blazers"
                  label="Suits & Blazers"
                />
                <SubCategoryItem
                  to="/mens-sweaters-cardigans"
                  label="Sweaters & Cardigans"
                />
                <SubCategoryItem to="/mens-jeans-denim" label="Jeans & Denim" />
                <SubCategoryItem
                  to="/mens-trousers-chinos"
                  label="Trousers & Chinos"
                />
                <SubCategoryItem
                  to="/mens-shorts-cargo-pants"
                  label="Shorts & Cargo Pants"
                />
                <SubCategoryItem to="/mens-innerwear" label="Innerwear" />
                <SubCategoryItem to="/mens-ethnic-wear" label="Ethnic Wear" />
                <SubCategoryItem
                  to="/mens-sleepwear-loungewear"
                  label="Sleepwear/Loungewear"
                />
              </CategoryItem>

              {/* Footwear */}
              <CategoryItem
                index={612}
                label="Footwear"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem to="/mens-casual-shoes" label="Casual Shoes" />
                <SubCategoryItem to="/mens-formal-shoes" label="Formal Shoes" />
                <SubCategoryItem
                  to="/mens-sandals-slippers"
                  label="Sandals & Slippers"
                />
                <SubCategoryItem
                  to="/mens-sports-shoes-trainers"
                  label="Sports Shoes/Trainers"
                />
                <SubCategoryItem to="/mens-boots" label="Boots" />
              </CategoryItem>

              {/* Accessories */}
              <CategoryItem
                index={613}
                label="Accessories"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem to="/mens-watches" label="Watches" />
                <SubCategoryItem to="/mens-smartwatches" label="Smartwatches" />
                <SubCategoryItem
                  to="/mens-sunglasses-eyewear"
                  label="Sunglasses & Eyewear"
                />
                <SubCategoryItem to="/mens-caps-hats" label="Caps & Hats" />
                <SubCategoryItem
                  to="/mens-belts-wallets"
                  label="Belts & Wallets"
                />
                <SubCategoryItem
                  to="/mens-cufflinks-tie-clips"
                  label="Cufflinks & Tie Clips"
                />
                <SubCategoryItem
                  to="/mens-socks-gloves"
                  label="Socks & Gloves"
                />
                <SubCategoryItem
                  to="/mens-bags-backpacks"
                  label="Bags & Backpacks"
                />
              </CategoryItem>

              {/* Sportswear & Activewear */}
              <CategoryItem
                index={614}
                label="Sportswear/Activewear"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem to="/mens-gym-wear" label="Gym Wear" />
                <SubCategoryItem
                  to="/mens-running-shoes-sneakers"
                  label="Running Shoes"
                />
                <SubCategoryItem
                  to="/mens-tracksuits-sports-jackets"
                  label="Tracksuits/Jackets"
                />
                <SubCategoryItem
                  to="/mens-swimwear-beachwear"
                  label="Swimwear/Beachwear"
                />
                <SubCategoryItem
                  to="/mens-compression-wear"
                  label="Compression Wear"
                />
              </CategoryItem>
            </CategoryItem>

            {/* Women’s Fashion */}
            <CategoryItem
              index={62}
              label="Women’s Fashion"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              {/* Clothing */}
              <CategoryItem
                index={621}
                label="Clothing"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/womens-tops-t-shirts"
                  label="Tops & T-Shirts"
                />
                <SubCategoryItem
                  to="/womens-blouses-shirts"
                  label="Blouses & Shirts"
                />
                <SubCategoryItem
                  to="/womens-dresses-jumpsuits"
                  label="Dresses & Jumpsuits"
                />
                <SubCategoryItem
                  to="/womens-jeans-denim"
                  label="Jeans & Denim"
                />
                <SubCategoryItem
                  to="/womens-trousers-leggings"
                  label="Trousers & Leggings"
                />
                <SubCategoryItem
                  to="/womens-skirts-shorts"
                  label="Skirts & Shorts"
                />
                <SubCategoryItem
                  to="/womens-coats-jackets"
                  label="Coats & Jackets"
                />
                <SubCategoryItem
                  to="/womens-sweaters-cardigans"
                  label="Sweaters & Cardigans"
                />
                <SubCategoryItem
                  to="/womens-lingerie-sleepwear"
                  label="Lingerie & Sleepwear"
                />
                <SubCategoryItem to="/womens-ethnic-wear" label="Ethnic Wear" />
              </CategoryItem>

              {/* Footwear */}
              <CategoryItem
                index={622}
                label="Footwear"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/womens-heels-pumps"
                  label="Heels & Pumps"
                />
                <SubCategoryItem
                  to="/womens-sports-shoes"
                  label="Sports Shoes"
                />
                <SubCategoryItem
                  to="/womens-sandals-flip-flops"
                  label="Sandals & Flip-Flops"
                />
                <SubCategoryItem
                  to="/womens-boots-winter"
                  label="Boots & Winter"
                />
                <SubCategoryItem
                  to="/womens-ethnic-footwear"
                  label="Ethnic Footwear"
                />
              </CategoryItem>

              {/* Accessories */}
              <CategoryItem
                index={623}
                label="Accessories"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/womens-handbags-clutches"
                  label="Handbags & Clutches"
                />
                <SubCategoryItem to="/womens-jewelry" label="Jewelry" />
                <SubCategoryItem
                  to="/womens-sunglasses-eyewear"
                  label="Sunglasses & Eyewear"
                />
                <SubCategoryItem to="/womens-watches" label="Watches" />
                <SubCategoryItem
                  to="/womens-smartwatches"
                  label="Smartwatches"
                />
                <SubCategoryItem
                  to="/womens-scarves-stoles"
                  label="Scarves & Stoles"
                />
                <SubCategoryItem
                  to="/womens-hats-headbands"
                  label="Hats & Headbands"
                />
                <SubCategoryItem
                  to="/womens-belts-wallets"
                  label="Belts & Wallets"
                />
              </CategoryItem>

              {/* Sportswear & Activewear */}
              <CategoryItem
                index={624}
                label="Sportswear/Activewear"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/womens-yoga-pants-leggings"
                  label="Yoga Pants & Leggings"
                />
                <SubCategoryItem to="/womens-sports-bras" label="Sports Bras" />
                <SubCategoryItem to="/crop-tops" label="Crop Tops" />
                <SubCategoryItem to="/womens-gym-shorts" label="Gym Shorts" />
                <SubCategoryItem to="/running-shoes" label="Running Shoes" />
                <SubCategoryItem to="/womens-swimwear" label="Swimwear" />
                <SubCategoryItem
                  to="/womens-tracksuits-jackets"
                  label="Tracksuits & Jackets"
                />
              </CategoryItem>
            </CategoryItem>

            {/* Kids’ Fashion */}
            <CategoryItem
              index={63}
              label="Kids’ Fashion"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              {/* Clothing */}
              <CategoryItem
                index={631}
                label="Clothing"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/kids-t-shirts-tops"
                  label="T-Shirts & Tops"
                />
                <SubCategoryItem
                  to="/kids-dresses-frocks"
                  label="Dresses & Frocks"
                />
                <SubCategoryItem
                  to="/kids-jeans-joggers"
                  label="Jeans & Joggers"
                />
                <SubCategoryItem
                  to="/kids-shorts-skirts"
                  label="Shorts & Skirts"
                />
                <SubCategoryItem
                  to="/kids-hoodies-sweatshirts"
                  label="Hoodies & Sweatshirts"
                />
                <SubCategoryItem
                  to="/kids-jackets-coats"
                  label="Jackets & Coats"
                />
                <SubCategoryItem
                  to="/kids-pajamas-sleepwear"
                  label="Pajamas & Sleepwear"
                />
                <SubCategoryItem
                  to="/school-uniforms"
                  label="School Uniforms"
                />
              </CategoryItem>

              {/* Footwear */}
              <CategoryItem
                index={632}
                label="Footwear"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem to="/running-shoes" label="Running Shoes" />
                <SubCategoryItem
                  to="/kids-dresses-frocks"
                  label="Dresses & Frocks"
                />
                <SubCategoryItem
                  to="/sandals-flip-flops"
                  label="Sandals & Flip-Flops"
                />
                <SubCategoryItem to="/formal-shoes" label="Formal Shoes" />
                <SubCategoryItem
                  to="/boots-rainwear"
                  label="Boots & Rainwear"
                />
              </CategoryItem>

              {/* Accessories */}
              <CategoryItem
                index={633}
                label="Accessories"
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem to="/backpacks" label="Backpacks" />
                <SubCategoryItem to="/hats-caps" label="Hats & Caps" />
                <SubCategoryItem to="/sunglasses" label="Sunglasses" />
                <SubCategoryItem to="/watchess" label="Sunglasses & Watches" />
                <SubCategoryItem to="/socks-gloves" label="Socks & Gloves" />
              </CategoryItem>

              {/* Sportswear/Activewear */}
              <CategoryItem
                index={634}
                label="Sportswear/Activewear "
                openSubmenus={openSubmenus}
                toggleSubmenu={toggleSubmenu}
              >
                <SubCategoryItem
                  to="/kids-sports-jerseys"
                  label="Sports Jerseys"
                />
                <SubCategoryItem
                  to="/kids-swimwear-beachwear"
                  label="Swimwear/Beachwear
"
                />
                <SubCategoryItem to="/gym-wear" label="gym-wear" />
                <SubCategoryItem to="/tracksuits" label="tracksuits" />
                <SubCategoryItem to="/sports-shoes" label="Sports Shoes" />
              </CategoryItem>
            </CategoryItem>
          </CategoryItem>

          {/* Liquor Category */}
          <CategoryItem
            index={636}
            label="Liquor"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Spirits & Hard Liquor */}
            <CategoryItem
              index={637}
              label="Spirits/Hard Liquor"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/whiskey" label="Whiskey" />
              <SubCategoryItem to="/vodka " label="Vodka" />
              <SubCategoryItem to="/rum" label="Rum" />
              <SubCategoryItem to="/gin" label="Gin" />
              <SubCategoryItem to="/tequila-mezcal" label="Tequila & Mezcal" />
              <SubCategoryItem to="/brandy-cognac" label="Brandy & Cognac" />
              <SubCategoryItem to="/Absinthe" label="Absinthe" />
              <SubCategoryItem to="/liqueurs" label="Liqueurs" />
            </CategoryItem>

            <CategoryItem
              index={638}
              label="Wine"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/red-wine" label="Red Wine" />
              <SubCategoryItem to="/white-wine" label="White Wine" />
              <SubCategoryItem to="/rosé-wine" label="Rosé Wine" />
              <SubCategoryItem to="/Champagne" label="Champagne" />
              <SubCategoryItem to="/sparkling-wine" label="Sparkling Wine" />
              <SubCategoryItem
                to="/dessert-sweet Wines"
                label="Dessert & Sweet Wines"
              />
              <SubCategoryItem to="/fortified-wines" label="Fortified Wines" />
            </CategoryItem>

            <CategoryItem
              index={639}
              label="Beer & Ciders"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/lager " label="Lager" />
              <SubCategoryItem to="/ale" label="Ale" />
              <SubCategoryItem to="/stout-porter" label="Stout & Porter" />
              <SubCategoryItem to="/wheat-beer" label="Wheat Beer" />
              <SubCategoryItem
                to="/craft-specialty-beers"
                label="Craft & Specialty Beers"
              />
              <SubCategoryItem to="/hard-ciders" label="Hard Ciders" />
            </CategoryItem>

            <CategoryItem
              index={640}
              label="Cocktails & Ready Drinks"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/pre-mixed-cocktails"
                label="Pre-Mixed Cocktails"
              />
              <SubCategoryItem
                to="/alcoholic-energy-drinks"
                label="Alcoholic Energy Drinks"
              />
              <SubCategoryItem to="/hard-seltzers" label="Hard Seltzers" />
              <SubCategoryItem
                to="/wine-Coolers-spritzers"
                label="Wine Coolers & Spritzers"
              />
            </CategoryItem>

            <CategoryItem
              index={641}
              label="Non-Alcoholic & Mixers"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/non-alcoholic-beer-wine"
                label="Beer & Wine"
              />
              <SubCategoryItem
                to="/tonic-water-soda"
                label="Tonic Water & Soda"
              />
              <SubCategoryItem
                to="/cocktail-syrups-bitters"
                label="Cocktail Syrups & Bitters"
              />
              <SubCategoryItem
                to="/fruit-juices-for-mixing"
                label="Fruit Juices for Mixing"
              />
              <SubCategoryItem to="/ice-garnishes" label="Ice & Garnishes" />
            </CategoryItem>
          </CategoryItem>

          {/* Pharmacy */}
          <CategoryItem
            index={642}
            label="Pharmacy"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Prescription Medications */}
            <CategoryItem
              index={643}
              label="Prescription Medications"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/antibiotics" label="Antibiotics" />
              <SubCategoryItem to="/pain-relievers" label="Pain Relievers" />
              <SubCategoryItem
                to="/anti-inflammatories"
                label="Anti-Inflammatories"
              />
              <SubCategoryItem
                to="/antidepressants-anxiety "
                label="Antidepressants & Anxiety "
              />
              <SubCategoryItem
                to="/blood-pressure-Heart"
                label="Blood Pressure & Heart"
              />
              <SubCategoryItem
                to="/diabetes-management"
                label="Diabetes Management"
              />
              <SubCategoryItem to="/allergy-asthma" label="Allergy & Asthma" />
              <SubCategoryItem
                to="/cholesterol-control"
                label="Cholesterol Control"
              />
              <SubCategoryItem
                to="/thyroid-medications"
                label="Thyroid Medications"
              />
              <SubCategoryItem
                to="/hormonal-birth-control"
                label="Hormonal & Birth Control"
              />
              <SubCategoryItem
                to="/gastrointestinal"
                label="Gastrointestinal"
              />
            </CategoryItem>

            {/* Over-the-Counter Medicines */}
            <CategoryItem
              index={644}
              label="Over-the-Counter"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/Over-the-Counter-pain-relief"
                label="Pain Relief"
              />
              <SubCategoryItem to="/cold-Flu" label="Cold & Flu" />
              <SubCategoryItem
                to="/cough-suppressants"
                label="Cough Suppressants"
              />
              <SubCategoryItem to="/expectorants" label="Expectorants" />
              <SubCategoryItem
                to="/antihistamines-allergy"
                label="Antihistamines/Allergy"
              />
              <SubCategoryItem
                to="/blood-pressure-Heart"
                label="Blood Pressure & Heart"
              />
              <SubCategoryItem
                to="/digestive-health"
                label="Digestive Health"
              />
              <SubCategoryItem
                to="/sleep-aids-relaxation"
                label="Sleep Aids & Relaxation"
              />
              <SubCategoryItem
                to="/motion-sicknes-travel"
                label="Motion Sickness & Travel"
              />
              <SubCategoryItem
                to="/ear-eye-nose-care"
                label="Ear, Eye & Nose Care"
              />
            </CategoryItem>

            {/* Over-the-Counter Medicines */}
            <CategoryItem
              index={645}
              label="Vitamins & Supplements"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/uultivitamins" label="Multivitamins" />
              <SubCategoryItem to="/immune-boosters" label="Immune Boosters" />
              <SubCategoryItem
                to="/cough-suppressants"
                label="Cough Suppressants"
              />
              <SubCategoryItem
                to="/bone-joint-health"
                label="Bone & Joint Health"
              />
              <SubCategoryItem
                to="/digestive-health"
                label="Digestive Health"
              />
              <SubCategoryItem
                to="/herbal-supplements"
                label="Herbal Supplements"
              />
              <SubCategoryItem to="/protein-powders" label="Protein Powders" />
              <SubCategoryItem
                to="/meal-replacements"
                label="Meal Replacements"
              />
              <SubCategoryItem
                to="/energy-brain-health"
                label="Energy & Brain Health"
              />
              <SubCategoryItem to="/fat-burners" label="Fat Burners" />
            </CategoryItem>

            {/* Personal Hygiene */}
            <CategoryItem
              index={646}
              label="Personal Hygiene"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/skin-care" label="Skin Care" />
              <SubCategoryItem to="/hair-care" label="Hair Care" />
              <SubCategoryItem to="/oral-care" label="Oral Care" />
              <SubCategoryItem
                to="/feminine-hygiene"
                label="Feminine Hygiene"
              />
              <SubCategoryItem to="/mens-grooming" label="Men's Grooming" />
              <SubCategoryItem
                to="/deodorants-antiperspirants"
                label="Deodorants/Antiperspirants"
              />
              <SubCategoryItem to="/bath-body-care" label="Bath & Body Care" />
            </CategoryItem>

            {/* Personal Hygiene */}
            <CategoryItem
              index={647}
              label="Baby & Child Care"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/baby-formula" label="Infant Formula" />
              <SubCategoryItem to="/baby-skincare" label="Baby Skincare" />
              <SubCategoryItem to="/Colic-drops" label="Colic Drops" />
              <SubCategoryItem to="/teething-relief" label="Teething Relief" />
              <SubCategoryItem
                to="/baby-diapers-wipes"
                label="Baby Diapers & Wipes"
              />
              <SubCategoryItem
                to="/childrens-cold-flu"
                label="Children's Cold, Flu"
              />
              <SubCategoryItem to="/kids-pain-relief" label="Pain Relief" />
            </CategoryItem>

            {/* First Aid & Wound Care */}
            <CategoryItem
              index={648}
              label="First Aid & Wound Care"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/bandages-gauze" label="Bandages/Gauze" />
              <SubCategoryItem
                to="/antiseptic-creams-sprays"
                label="Antiseptic Creams/Sprays"
              />
              <SubCategoryItem to="/thermometers" label="thermometers" />
              <SubCategoryItem to="/fever-strips" label="Fever Strips" />
              <SubCategoryItem to="/burn-relief" label="Burn Relief" />
              <SubCategoryItem to="/wound-ointments" label="Wound Ointments" />
              <SubCategoryItem
                to="/pain-relief-sprays"
                label="Pain Relief Sprays"
              />
              <SubCategoryItem to="/muscle-rubs" label="Muscle Rubs" />
              <SubCategoryItem
                to="/eye-wash-eye-drops"
                label="Eye Wash & Drops"
              />
            </CategoryItem>

            {/* Medical Equipment & Supplies */}
            <CategoryItem
              index={649}
              label="Medical Equipment"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/blood-pressure-monitors"
                label="Blood Pressure Monitors"
              />
              <SubCategoryItem
                to="/glucometers-diabetes-kits"
                label="Glucometers/Diabetes Kits"
              />
              <SubCategoryItem
                to="/nebulizers-breathing-aids"
                label="Nebulizers/Breathing Aids"
              />
              <SubCategoryItem to="/mobility-aids" label="Mobility Aids" />
              <SubCategoryItem
                to="/surgical-gloves-masks"
                label="Surgical Gloves & Masks"
              />
              <SubCategoryItem to="/disinfectants" label="Disinfectants" />
              <SubCategoryItem to="/hot-cold-packs" label="Hot & Cold Packs" />
            </CategoryItem>

            {/* Family Planning */}
            <CategoryItem
              index={650}
              label="Family Planning"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/condoms-lubricants"
                label="Condoms & Lubricants"
              />
              <SubCategoryItem
                to="/birth-control-contraceptives"
                label="Birth Control/Contraceptive"
              />
              <SubCategoryItem
                to="/fertility-supplements"
                label="Fertility Supplements"
              />
              <SubCategoryItem
                to="/sex-toys-vibrators"
                label="Sex Toys & Vibrators"
              />
            </CategoryItem>

            {/* Mental Health & Wellness */}
            <CategoryItem
              index={651}
              label="Mental Health & Wellness"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/stress-relief" label="Mood Enhancers" />
              <SubCategoryItem
                to="/focus-memory-boosters"
                label="Focus & Memory Boosters"
              />
              <SubCategoryItem
                to="/sleep-aids-melatonin"
                label="Sleep Aids & Melatonin"
              />
              <SubCategoryItem
                to="/meditation-aromatherapy-oils"
                label="Meditation & Aromatherapy Oils"
              />
            </CategoryItem>

            {/* Herbal Medicine */}
            <CategoryItem
              index={652}
              label="Herbal Medicine"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/homeopathy-remedies"
                label="Homeopathy Remedies"
              />
              <SubCategoryItem
                to="/ayurveda-remedies"
                label="Ayurveda Remedies"
              />
              <SubCategoryItem
                to="/traditional-chinese-medicine"
                label="Traditional Chinese Medicine"
              />
              <SubCategoryItem to="/Essential Oils" label="Aromatherapy" />
              <SubCategoryItem
                to="/cbd-hemp-based-products"
                label="CBD & Hemp-Based Products"
              />
            </CategoryItem>
          </CategoryItem>

          {/* Garage Category */}
          <CategoryItem
            index={653}
            label="Garage"
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
          >
            {/* Engine & Performance */}
            <CategoryItem
              index={654}
              label="Engine & Performance Parts"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/engine-oil-lubricants"
                label="Engine Oil & Lubricants"
              />
              <SubCategoryItem
                to="/air-fuel-filters"
                label="Air & Fuel Filters"
              />
              <SubCategoryItem
                to="/spark-plugs-ignition-coils"
                label="Spark Plugs & Ignition Coils"
              />
              <SubCategoryItem
                to="/timing-belts-chains"
                label="Timing Belts & Chains"
              />
              <SubCategoryItem
                to="/piston-rings-cylinder-heads"
                label="Piston Rings & Cylinder Heads"
              />
              <SubCategoryItem
                to="/turbochargers-superchargers"
                label="Turbochargers & Superchargers"
              />
              <SubCategoryItem
                to="/oil-pumps-fuel-pumps"
                label="Oil Pumps & Fuel Pumps"
              />
              <SubCategoryItem
                to="/radiators-cooling-systems"
                label="Radiators & Cooling Systems"
              />
            </CategoryItem>

            {/* Suspension & Steering */}
            <CategoryItem
              index={655}
              label="Suspension & Steering"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/Shock Absorbers & Struts"
                label="Shock Absorbers & Struts"
              />
              <SubCategoryItem
                to="/Ball Joints & Control Arm"
                label="Ball Joints & Control Arm"
              />
              <SubCategoryItem
                to="/Power Steering Pumps & Fluid"
                label="Power Steering Pumps & Fluid"
              />
              <SubCategoryItem
                to="/Steering Racks & Tie Rods"
                label="Steering Racks & Tie Rods"
              />
              <SubCategoryItem
                to="/Wheel Bearings & Hub Assemblies"
                label="Wheel Bearings & Hub Assemblies"
              />
            </CategoryItem>

            {/* Brakes & Clutch */}
            <CategoryItem
              index={656}
              label="Brakes & Clutch"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/brake-pads-brake-discs"
                label="Brake Pads & Brake Discs"
              />
              <SubCategoryItem
                to="/brake-calipers-brake-lines"
                label="Brake Calipers & Brake Lines"
              />
              <SubCategoryItem
                to="/master-cylinders-brake-fluid"
                label="Master Cylinders & Brake Fluid"
              />
              <SubCategoryItem
                to="/clutch=kits-flywheels"
                label="Clutch Kits & Flywheels"
              />
              <SubCategoryItem
                to="/handbrake-cables-components"
                label="Handbrake Cables & Components"
              />
            </CategoryItem>

            {/* Electrical & Lighting */}
            <CategoryItem
              index={657}
              label="Electrical & Lighting"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/car-batteries-chargers"
                label="Car Batteries & Chargers"
              />
              <SubCategoryItem
                to="/alternators-starters"
                label="Alternators & Starters"
              />
              <SubCategoryItem
                to="/headlights-tail-fog-lights"
                label="Headlights, Tail & Fog Lights"
              />
              <SubCategoryItem
                to="/wiper-motors-blades"
                label="Wiper Motors & Blades"
              />
              <SubCategoryItem
                to="/fuse-boxes-wiring-harnesses"
                label="Fuse Boxes & Wiring Harnesses"
              />
            </CategoryItem>

            {/* Body Parts & Exterior */}
            <CategoryItem
              index={658}
              label="Body Parts & Exterior"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/bumpers-fenders"
                label="Bumpers & Fenders"
              />
              <SubCategoryItem
                to="/car-doors-handles"
                label="Car Doors & Handles"
              />
              <SubCategoryItem
                to="/side-mirrors-rearview-mirrors"
                label="Side Mirrors & Rearview Mirrors"
              />
              <SubCategoryItem
                to="/windscreens-wiper-blades"
                label="Windscreens & Wiper Blades"
              />
              <SubCategoryItem
                to="/mud-flaps-spoilers"
                label="Mud Flaps & Spoilers"
              />
            </CategoryItem>

            {/* Wheels & Tyres */}
            <CategoryItem
              index={659}
              label="Wheels & Tyres"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem to="/Car Tyres" label="Car Tyres" />
              <SubCategoryItem
                to="/alloy-steel-rims"
                label="Alloy & Steel Rims"
              />
              <SubCategoryItem
                to="/wheel-nuts-bolts"
                label="Wheel Nuts & Bolts"
              />
              <SubCategoryItem
                to="/wheel-alignment-balancing-kits"
                label="Wheel Alignment/Balancing Kits"
              />
              <SubCategoryItem
                to="/tire-inflators-pressure-gauges"
                label="Tire Inflators/Pressure Gauges"
              />
            </CategoryItem>

            {/* Exhaust & Emissions */}
            <CategoryItem
              index={660}
              label="Exhaust & Emissions"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/exhaust-pipes-mufflers"
                label="Exhaust Pipes & Mufflers"
              />
              <SubCategoryItem
                to="/catalytic-converters"
                label="Catalytic Converters"
              />
              <SubCategoryItem
                to="/oxygen-sensors-egr-valves"
                label="Oxygen Sensors & EGR Valves"
              />
              <SubCategoryItem
                to="/exhaust-gaskets-manifolds"
                label="Exhaust Gaskets & Manifolds"
              />
            </CategoryItem>

            {/* Transmission & Drivetrain */}
            <CategoryItem
              index={661}
              label="Transmission & Drivetrain"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/gearboxes-transmission-fluids"
                label="Gearboxes & Transmission Fluids"
              />
              <SubCategoryItem
                to="/drive-shafts-cv-joints"
                label="Drive Shafts & CV Joints"
              />
              <SubCategoryItem
                to="/differentials-axles"
                label="Differentials & Axles"
              />
              <SubCategoryItem
                to="/transmission-mounts-bearings"
                label="Transmission Mounts & Bearings"
              />
            </CategoryItem>

            {/* Transmission & Drivetrain */}
            <CategoryItem
              index={661}
              label="Transmission & Drivetrain"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/gearboxes-transmission-fluids"
                label="Gearboxes & Transmission Fluids"
              />
              <SubCategoryItem
                to="/drive-shafts-cv-joints"
                label="Drive Shafts & CV Joints"
              />
              <SubCategoryItem
                to="/differentials-axles"
                label="Differentials & Axles"
              />
              <SubCategoryItem
                to="/transmission-mounts-bearings"
                label="Transmission Mounts & Bearings"
              />
            </CategoryItem>

            {/* Interior Accessories */}
            <CategoryItem
              index={662}
              label="Interior Accessories"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/car-seat-covers-floor-mats"
                label="Car Seat Covers & Floor Mats"
              />
              <SubCategoryItem
                to="/dashboard-covers-steering-wheel-covers"
                label="Dashboard,Steering, Wheel Covers"
              />
              <SubCategoryItem
                to="/sunshades-window-tints"
                label="Sunshades & Window Tints"
              />
              <SubCategoryItem
                to="/car-air-fresheners"
                label="Car Air Fresheners"
              />
              <SubCategoryItem
                to="/sound-systems-speakers"
                label="Sound Systems & Speakers"
              />
            </CategoryItem>

            {/* Car Security & Safety */}
            <CategoryItem
              index={663}
              label="Car Security & Safety"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/car-alarms-immobilizers"
                label="Car Alarms & Immobilizers"
              />
              <SubCategoryItem
                to="/gps-trackers-anti-theft-locks"
                label="GPS Trackers/Anti-Theft Locks"
              />
              <SubCategoryItem
                to="/fire-extinguishers-first-aid-kits"
                label="Fire Extinguishers/First Aid Kits"
              />
              <SubCategoryItem
                to="/dash-cameras-parking-sensors"
                label="Dash Cameras & Parking Sensors"
              />
              <SubCategoryItem to="/emergency-tools" label="Emergency Tools" />
            </CategoryItem>

            {/* Tools & Garage Equipment */}
            <CategoryItem
              index={664}
              label="Tools & Garage Equipment"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/wrenches-screwdrivers"
                label="Wrenches/Screwdrivers"
              />
              <SubCategoryItem to="/socket-sets" label="Socket Sets" />
              <SubCategoryItem
                to="/torque-trenches-impact-guns"
                label="Torque Wrenches/Impact Guns"
              />
              <SubCategoryItem
                to="/diagnostic-scanners"
                label="Diagnostic Scanners"
              />
              <SubCategoryItem to="/code-readers" label="Code Readers" />
              <SubCategoryItem
                to="/battery-testers-jump-starters"
                label="Battery Testers & Jump Starters"
              />
              <SubCategoryItem to="/engine-hoists" label="Engine Hoists" />
              <SubCategoryItem
                to="/lifting-equipment"
                label="Lifting Equipment"
              />
            </CategoryItem>

            {/* Fluids & Maintenance */}
            <CategoryItem
              index={665}
              label="fluids-maintenance"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/engine-oil-coolant"
                label="Engine Oil & Coolant"
              />
              <SubCategoryItem
                to="/transmission-fluid-brake-fluid"
                label="Transmission Fluid & Brake Fluid"
              />
              <SubCategoryItem
                to="/windshield-washer-fluid"
                label="Windshield Washer Fluid"
              />
              <SubCategoryItem
                to="/rust-removers-protectants"
                label="Rust Removers & Protectants"
              />
              <SubCategoryItem
                to="/car-wax-polishing-products"
                label="Car Wax & Polishing Products"
              />
            </CategoryItem>

            {/* Motorcycle & Bike Parts */}
            <CategoryItem
              index={666}
              label="Motorcycle & Bikes"
              openSubmenus={openSubmenus}
              toggleSubmenu={toggleSubmenu}
            >
              <SubCategoryItem
                to="/motorcycle-tires-tubes"
                label="Motorcycle Tires & Tubes"
              />
              <SubCategoryItem
                to="/bike-chains-sprockets"
                label="Bike Chains & Sprockets"
              />
              <SubCategoryItem
                to="/handlebars-grips"
                label="Handlebars & Grips"
              />
              <SubCategoryItem
                to="/handlebars-grips"
                label="Handlebars & Grips"
              />
              <SubCategoryItem
                to="/helmets-riding-gea"
                label="Helmets & Riding Gea"
              />
              <SubCategoryItem
                to="/brake-clutch-levers"
                label="Brake & Clutch Levers"
              />
            </CategoryItem>
          </CategoryItem>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

// Reusable CategoryItem Component
const CategoryItem = ({
  index,
  label,
  openSubmenus,
  toggleSubmenu,
  children,
}) => (
  <li className="list-none">
    <div className="flex items-center relative">
      <Button
        className="w-full !text-left !justify-start !px-3 !text-text-primary"
        onClick={() => toggleSubmenu(index)}
      >
        {label}
      </Button>
      {openSubmenus[index] ? (
        <FiMinusSquare
          className="absolute top-[10px] right-[15px] cursor-pointer"
          onClick={() => toggleSubmenu(index)}
        />
      ) : (
        <FiPlusSquare
          className="absolute top-[10px] right-[15px] cursor-pointer"
          onClick={() => toggleSubmenu(index)}
        />
      )}
    </div>

    {openSubmenus[index] && <ul className="submenu pl-6">{children}</ul>}
  </li>
);

// Reusable SubCategoryItem Component
const SubCategoryItem = ({ to, label }) => (
  <li className="list-none mb-1">
    <Link
      to={to}
      className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
    >
      {label}
    </Link>
  </li>
);

export default CategoryPanel;
