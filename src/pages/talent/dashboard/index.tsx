import SideBar from "@/features/Dashboard/components/SideBar";
import TalentHeader from "@/features/Dashboard/components/TalentHeader";
import TopData from "@/features/Dashboard/components/DashboardTopData";
import NotificationBox from "@/features/Dashboard/components/NotificationBox";
import GigBox from "@/features/Dashboard/components/GigBox";
import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useQuery } from "react-query";
import { Box, CircularProgress } from "@mui/material";
import { config } from "@/config";

export const getProfile = async (token: string, username: string) => {
  const response = await axios.get(
    `${config.apiBaseUrl}/api/v1/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.username;
};

// Fetch user profile from the database with react-query
export const useProfile = () => {
  const router = useRouter();
  const authToken = parseCookies().aToken;
  const username = parseCookies().username;

  if (!authToken && typeof window !== "undefined") {
    router.push("/login");
  }

  return useQuery(["profile", authToken], () =>
    getProfile(authToken, username)
  );
};

export default function Dashboard() {
  const { data: userProfile, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <Box
        className="mt-[25%]"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="flex bg-gradient-to-r from-[#3F288339] to-[#2DA5A439] py-[2rem] px-[3rem] h-[100%]">
      <SideBar />
      <div className="  bg-white p-[2rem] ml-[30rem] rounded-[2rem] w-[100%]">
        <TalentHeader />
        <TopData />
        <div className="flex justify-between">
          <GigBox />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}
