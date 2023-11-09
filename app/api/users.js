import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://randomuser.me/api/?results=50');
  const users = response.data.results;
  return users;
};

export default fetchUsers;
