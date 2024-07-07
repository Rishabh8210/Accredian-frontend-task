import React, { useState, useEffect } from "react";
import downArrow from "../assets/downArrow.svg";
import axios from "axios";
import userIcon from "./../assets/userIcon.jpg";
import Logo from "../assets/Logo.png";
import invitationHistoryData from "../invitationalHistory.json";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const Dashboard = () => {
	const [userData, setUserData] = useState(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileProfileDropdownOpen, setIsMobileProfileDropdownOpen] =
		useState(false);
	const [invitationHistory, setInvitationHistory] = useState([]);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleMobileProfileDropdown = () => {
		setIsMobileProfileDropdownOpen(!isMobileProfileDropdownOpen);
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const token = localStorage.getItem('token');
			if (token) {
				try {
					const response = await axios.get('http://localhost:3000/api/v1/user/profile', {
						headers: {
							Authorization: `Bearer ${token}`
						}
					});
					// console.log('User data:', response.data);
					setUserData(response?.data?.data)
					// setUserData(response.data); // Set user data in state
				} catch (error) {
					console.error('Error fetching user data:', error);
					// Handle error cases or display error message to user
				}
			}
		};

		fetchUserData(); // Call fetchUserData function on component mount

		setInvitationHistory(invitationHistoryData);
	}, []);

	const getBarChartData = () => {
		const refStatusCounts = invitationHistory.reduce((acc, curr) => {
			acc[curr.refstatus] = (acc[curr.refstatus] || 0) + 1;
			return acc;
		}, {});

		const labels = Object.keys(refStatusCounts);
		const data = Object.values(refStatusCounts);

		return {
			labels,
			datasets: [
				{
					label: "Number of Referrals",
					backgroundColor: "#2563eb",
					borderColor: "#1e40af",
					borderWidth: 1,
					hoverBackgroundColor: "#1e40af",
					hoverBorderColor: "#1e40af",
					data,
				},
			],
		};
	};

	function handleSubmit() {
		localStorage.clear('token')
		localStorage.clear('name')
		window.location = '/'
	}
	function handleNavigation(){
		window.location = '/'
	}
	return (
		<main>
			<nav className='h-16 w-full'>
				<div className='h-full w-full px-5 flex justify-between items-center sm:px-10 md:px-24'>
					<div className='flex items-center gap-7'>
						<img
							className='h-10'
							src={Logo}
							alt='acceredian'
						/>
					</div>
					<div className='hidden lg:flex h-fit w-fit gap-6 justify-center items-center text-lg'>
						<button className='h-12 px-[2rem] text-base hover:bg-slate-300 bg-slate-100 rounded-lg font-bold'>
							Balance: {userData?.wallet}
						</button>
						<div className='relative'>
							<button
								className='flex justify-center items-center gap-[10px] px-[2rem] h-12 min-w-[9rem] text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold'
								onClick={toggleDropdown}>
								<div className='w-[1.5rem] h-[1.5rem] bg-slate-100 hover:bg-slate-300 rounded-xl overflow-hidden'>
									<img
										src={userIcon}
										alt=''
									/>
								</div>
								<div>{userData?.name}</div>
								<div>
									<img
										src={downArrow}
										alt=''
									/>
								</div>
							</button>
							{isDropdownOpen && (
								<div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
									<button className='block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200'>
										Settings
									</button>
									<button className='block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200' onClick={() => handleSubmit()}>
										Logout
									</button>
								</div>
							)}
						</div>
					</div>
					<div className='lg:hidden'>
						<button
							className='text-2xl'
							onClick={toggleMobileMenu}>
							☰
						</button>
					</div>
				</div>
				{isMobileMenuOpen && (
					<div className='lg:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50'>
						<div className='p-4 border-b border-gray-300'>
							<button className='block w-full text-left text-gray-800 hover:bg-gray-200'>
								Balance: {userData?.wallet}
							</button>
						</div>
						<div className='p-4 border-b border-gray-300'>
							<button className='block w-full px-2 py-2 text-left text-gray-800 hover:bg-gray-200' onClick={() => handleNavigation()}>
							 	Д  Home
							</button>
							<button
								className='w-full text-left text-gray-800 hover:bg-gray-200 flex gap-[10px] items-center'
								onClick={toggleMobileProfileDropdown}>
								<div className='w-[1.5rem] h-[1.5rem] bg-slate-100 hover:bg-slate-300 rounded-xl overflow-hidden'>
									<img
										src={userIcon}
										alt=''
									/>
								</div>
								<div>{userData.name}</div>
								<img
									src={downArrow}
									alt=''
								/>
							</button>
							{isMobileProfileDropdownOpen && (
								<div className='mt-2 bg-white border border-gray-300 rounded-lg shadow-lg'>
									<button className='block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200'>
										Settings
									</button>
									<button className='block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200' onClick={() => handleSubmit()}>
										Logout
									</button>
								</div>
							)}
						</div>
					</div>
				)}
			</nav>

			<main className='lg:mx-[5vw]'>
				<section className='container mx-auto px-4 py-8'>
					<h2 className='text-2xl font-bold mb-4'>
						Invitation History
					</h2>
					<div className='flex flex-col lg:flex-row gap-4'>
						<div className='w-full lg:w-1/2'>
							<table className='min-w-full bg-white rounded-lg overflow-hidden'>
								<thead>
									<tr>
										<th className='py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center'>
											Username
										</th>
										<th className='py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center'>
											Course Name
										</th>
										<th className='py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center'>
											Referral Status
										</th>
									</tr>
								</thead>
								<tbody>
									{invitationHistory.map(
										(invitation, index) => (
											<tr key={index}>
												<td className='py-2 px-4 border-b border-gray-200 text-center'>
													{invitation.username}
												</td>
												<td className='py-2 px-4 border-b border-gray-200 text-center'>
													{invitation.coursename}
												</td>
												<td className='py-2 px-4 border-b border-gray-200 text-center'>
													{invitation.refstatus}
												</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>
						<div className='w-full lg:w-1/2 mt-4 lg:mt-0'>
							<Bar
								data={getBarChartData()}
								options={{
									responsive: true,
									maintainAspectRatio: false,
								}}
							/>
						</div>
					</div>
				</section>
			</main>
		</main>
	);
};

export default Dashboard;