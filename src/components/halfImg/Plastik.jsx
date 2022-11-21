import React from "react";
import { Box, styled, Typography } from "@mui/material";
const Desc = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "550px",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "1152px",
          height: "364px",
          borderRadius: "20px",
          backgroundPositionY: "-83px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "300px",
            border: "1px solid red",
            backgroundImage: "url(./a.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          style={{
            width: "722px",
            height: "300px",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", mx: 10, marginTop: "-50px" }}>
            Cara Daur Ulang Sampah
          </Typography>
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "700px",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <CustomBox>
                <div>
                  <Typography variant="h3" sx={{ fontSize: "30px", fontWeight: "bold", color: "#000339", my: 1 }}>
                    Cara daur ulang sampah plastik
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#5A6473",
                      textAlign: "justify",
                      my: 2,
                    }}
                  >
                    sampah plastik untuk didaur ulang, ada beberapa hal yang perlu diperhatikan, di antaranya: <br /> 1. Mengumpulkan dan Menyortir Sebelum melakukan daur ulang plastik, mengumpulkan dan menyortir itu penting untuk
                    dilakukan. <br />
                    2. Membersihkan Plastik Untuk daur ulang plastik, pastikan juga sampah plastik sudah bersih dan terbebas dari kotoran. Karena, keberadaan kotoran pada plastik dapat merusak produk daur ulang.
                    <br />
                    Daur ulang saja tidak akan cukup. Untuk mengatasi permasalahan plastik, harus dibarengi dengan kesadaran untuk mengurangi pemakaian plastik disertai kebijakan yang mendukung.
                  </Typography>
                </div>
              </CustomBox>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Desc;
