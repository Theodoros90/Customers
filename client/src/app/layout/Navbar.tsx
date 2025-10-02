
import { AppBar, Box, Button, Container, FormGroup, MenuItem, Toolbar, Typography } from "@mui/material";

type Props = {
    openForm: () => void;
}

export default function Navbar({ openForm }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #121212ff 0%, #484747ff 69%, #898989ff 89%)'
            }}>
                <Container maxWidth='xl'>

                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Box>
                            <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                <FormGroup />
                                <Typography variant="h4" fontWeight='bold'>Contact Book</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <MenuItem>
                                Contacts
                            </MenuItem>

                            <MenuItem>
                                About
                            </MenuItem>

                            <Button
                                size="large"
                                variant="contained"
                                color="success"
                                onClick={() => openForm()}
                            >
                                Create Customer
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    );

}