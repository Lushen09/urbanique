import { useState } from 'react';
import { Box, Text, Button, FormControl, FormLabel, Input, Stack, Heading, } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSignup } from '../hooks/useSignUp';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [name, setSignupName] = useState('');
    const [email, setSignupEmail] = useState('');
    const [password, setSignupPassword] = useState('');
    const { signup, signUpError, isLoading } = useSignup();
    const { login, loginError, isLoginLoading } = useLogin();

    const navigate = useNavigate(); // Use navigate hook from react-router-dom

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        // Call login function from useLogin hook
        const success = await login(loginEmail, loginPassword);

        // Redirect to shop page after successful signup
        if (success) {
            navigate('/shop');
        }
    };

    // handle signup form submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // Call signup function from useSignup hook
        const success = await signup(email, password, name);

        // Redirect to shop page after successful signup
        if (success) {
            navigate('/');
        }

    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Box>
            <Navbar />
            <Box
                minH="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
            >
                <Box
                    p={8}
                    maxW={{ base: '90%', sm: '80%', md: '50%' }}
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg"
                    bg="white"
                >
                    <Box textAlign="center">
                        <Heading>{isLogin ? 'Login' : 'Signup'}</Heading>
                        <Text>
                            {isLogin
                                ? "Don't have an account?"
                                : 'Already have an account?'}
                            <Button variant="link" onClick={toggleForm} ml={2}>
                                {isLogin ? 'Sign up here' : 'Log in here'}
                            </Button>
                        </Text>
                    </Box>
                    <Box my={4} textAlign="left">
                        {isLogin ? (
                            <form onSubmit={handleLoginSubmit}>
                                <Stack spacing={4}>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            type="email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                        />
                                    </FormControl>
                                    { loginError && <Text color="red.500">{loginError}</Text> }
                                    <Button
                                        type="submit"
                                        colorScheme="blue"
                                        variant="solid"
                                        width="full"
                                        disabled={isLoginLoading}
                                    >
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        ) : (
                            <form onSubmit={handleSignupSubmit}>
                                <Stack spacing={4}>
                                    <FormControl id="name">
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setSignupName(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setSignupEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setSignupPassword(e.target.value)}
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        colorScheme="blue"
                                        variant="solid"
                                        width="full"
                                        disabled={isLoading}
                                    >
                                        Sign up

                                    </Button>

                                    {/* Display sign up error if there is one */}
                                    {signUpError && <Text color="red.500">{signUpError}</Text>}

                                </Stack>
                            </form>
                        )}
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>

    );
};

export default LoginPage;
