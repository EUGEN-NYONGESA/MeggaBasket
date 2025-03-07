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
