import { signOut, useSession } from "next-auth/react";
import { FC, useState, MouseEvent } from "react";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";

export const AdminMenu: FC = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!session) return null;

  const imageUrl = session.user?.image ? session.user?.image : "";
  const username = session.user?.name ? session.user?.name : "";

  return (
    <>
      {session.user && (
        <Avatar
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{ width: 30, height: 30, cursor: "pointer", ml: 2 }}
          alt={username}
          src={imageUrl}
        />
      )}

      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "filter-button"
        }}>
        <MenuItem>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <Link href="/admin" onClick={handleClose}>
            Manage products
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => signOut()}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
};
