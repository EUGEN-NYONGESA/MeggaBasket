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
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
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
