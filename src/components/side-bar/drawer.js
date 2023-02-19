// import React from 'react'
// import {Box, Drawer, ListItem, ListItemText, container,List} from '@material-ui/core'
// import {InboxIcon, MailIcon} from '@material-ui/icons'

// const SideDrawer = () => {
//     const drawerWidth = 240;
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//       };

//       const drawer = (
//         <div>
//           <Toolbar />
//           <Divider />
//           <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       );
//   return (
//     <Box
//     component="nav"
//     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//     aria-label="mailbox folders"
//   >
//     {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//     <Drawer
//       container={container}
//       variant="temporary"
//       open={mobileOpen}
//       onClose={handleDrawerToggle}
//       ModalProps={{
//         keepMounted: true, // Better open performance on mobile.
//       }}
//       sx={{
//         display: { xs: 'block', sm: 'none' },
//         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//       }}
//     >
//       {drawer}
//     </Drawer>
//     <Drawer
//       variant="permanent"
//       sx={{
//         display: { xs: 'none', sm: 'block' },
//         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//       }}
//       open
//     >
//       {drawer}
//     </Drawer>
//   </Box>
//   )
// }

// export default SideDrawer