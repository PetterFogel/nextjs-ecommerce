"use client";
import { FC, useState, MouseEvent } from "react";
import { Categories } from "../../common/constants/enums";
import { Button, Menu, MenuItem, Stack } from "@mui/material";

interface Props {
  onCategoryFilterChange: (value: string) => void;
  onPriceSortChange: (value: string | null) => void;
}

export const ProductFilterPanel: FC<Props> = ({ onCategoryFilterChange, onPriceSortChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const isFilterOpen = Boolean(anchorEl);
  const isSortOpen = Boolean(anchorEl2);

  const openFilterHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const openSortHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl2(event.currentTarget);

  const closeFilterHandler = () => setAnchorEl(null);
  const closeSortHandler = () => setAnchorEl2(null);

  const filterSelectHandler = (value: string) => {
    setAnchorEl(null);
    onCategoryFilterChange(value);
  };

  const sortPriceHandler = (value: string | null) => {
    setAnchorEl2(null);
    onPriceSortChange(value);
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <Button
        id="filter-button"
        size="small"
        aria-haspopup="true"
        aria-controls={isFilterOpen ? "filter-menu" : undefined}
        aria-expanded={isFilterOpen ? "true" : undefined}
        onClick={openFilterHandler}>
        Filter
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={isFilterOpen}
        onClose={closeFilterHandler}
        MenuListProps={{
          "aria-labelledby": "filter-button"
        }}>
        <MenuItem onClick={() => filterSelectHandler(Categories.ALL)}>All</MenuItem>
        <MenuItem onClick={() => filterSelectHandler(Categories.SHOES)}>Shoes</MenuItem>
        <MenuItem onClick={() => filterSelectHandler(Categories.OVERSHIRTS)}>Overshirts</MenuItem>
      </Menu>
      <Button
        id="sort-button"
        size="small"
        aria-haspopup="true"
        aria-controls={isSortOpen ? "sort-menu" : undefined}
        aria-expanded={isSortOpen ? "true" : undefined}
        onClick={openSortHandler}>
        Sort
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl2}
        open={isSortOpen}
        onClose={closeSortHandler}
        MenuListProps={{
          "aria-labelledby": "sort-button"
        }}>
        <MenuItem onClick={() => sortPriceHandler(null)}>Popular</MenuItem>
        <MenuItem onClick={() => sortPriceHandler("ASC")}>Lowest price</MenuItem>
        <MenuItem onClick={() => sortPriceHandler("DESC")}>Highest price</MenuItem>
      </Menu>
    </Stack>
  );
};
