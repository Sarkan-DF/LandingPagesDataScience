import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import Button from "@mui/material/Button/Button";

const PriceSection: React.FC = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
          mt: 5,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={4}
              sx={{
                background: "linear-gradient(to bottom, #ffd97a, #DAA520)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fff",
                  padding: "1rem",
                }}
              >
                <Typography variant="h6" mb={1}>
                  BASIC
                </Typography>
                <Divider
                  sx={{
                    width: "20%",
                    height: ".2rem",
                    backgroundColor: "#DAA520",
                    color: "#DAA520",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" textAlign={"center"} mb={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant="h6" color={"secondary"} mb={1}>
                  R$ 29,90/Mês
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "1.5rem 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                    padding: "1.3rem",
                  }}
                >
                  <KeyboardArrowUpIcon
                    fontSize="large"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Button
                    variant="text"
                    fullWidth
                    sx={{
                      bgcolor: "#fff",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#fff",
                        bgcolor: "#a2a2a2",
                        transition: "all .3s",
                      },
                    }}
                  >
                    Contratar Plano
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={4}
              sx={{
                background: "linear-gradient(to bottom, #a4dfff, #18affe)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fff",
                  padding: "1rem",
                }}
              >
                <Typography variant="h6" mb={1}>
                  STANDARD
                </Typography>
                <Divider
                  sx={{
                    width: "20%",
                    height: ".2rem",
                    backgroundColor: "#18affe",
                    color: "#18affe",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" textAlign={"center"} mb={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant="h6" color={"primary"} mb={1}>
                  R$ 59,90/Mês
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "1.5rem 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                    padding: "1.3rem",
                  }}
                >
                  <KeyboardArrowUpIcon
                    fontSize="large"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Button
                    variant="text"
                    fullWidth
                    sx={{
                      bgcolor: "#fff",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#fff",
                        bgcolor: "#a2a2a2",
                        transition: "all .3s",
                      },
                    }}
                  >
                    Contratar Plano
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={4}
              sx={{
                background: "linear-gradient(to bottom, #a8a8a8, #5d5d5d)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#fff",
                  padding: "1rem",
                }}
              >
                <Typography variant="h6" mb={1}>
                  PREMIUM
                </Typography>
                <Divider
                  sx={{
                    width: "20%",
                    height: ".2rem",
                    backgroundColor: "#5d5d5d",
                    color: "#5d5d5d",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" textAlign={"center"} mb={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant="h6" color={"#5d5d5d"} mb={1}>
                  R$ 89,90/Mês
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "1.5rem 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                  <Typography variant="body2" color={"#fff"}>
                    Lorem ipsum dolor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                    padding: "1.3rem",
                  }}
                >
                  <KeyboardArrowUpIcon
                    fontSize="large"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Button
                    variant="text"
                    fullWidth
                    sx={{
                      bgcolor: "#fff",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#fff",
                        bgcolor: "#a2a2a2",
                        transition: "all .3s",
                      },
                    }}
                  >
                    Contratar Plano
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PriceSection;
