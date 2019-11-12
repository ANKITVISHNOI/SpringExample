package com.avssoftsol.service.user;

import java.util.List;

import com.avssoftsol.dao.user.UserDao;
import com.avssoftsol.dao.user.UserDaoImpl;
import com.avssoftsol.entity.user.User;

public class UserServiceImpl implements UserService{

	private UserDao userDao = new UserDaoImpl();

	@Override
	public void saveUser(User user) {
		userDao.saveUser(user);

	}

	@Override
	public List<User> getUserList() {
		List<User> userList = userDao.getUserList();
		return userList;
	}

	@Override
	public User getUserById(Long id) {
		User user = userDao.getUserById(id);
		return user;
	}

	@Override
	public void updateUser(User userUpdate) {
		User userOld = userDao.getUserById(userUpdate.getId());
		
		if (userUpdate != null) {
			userOld.setFirstName(userUpdate.getFirstName());
			userOld.setLastName(userUpdate.getLastName());
			userOld.setEmail(userUpdate.getEmail());
			userOld.setPhone(userUpdate.getPhone());
			userOld.setAlternatePhone(userUpdate.getAlternatePhone());
			userOld.setAddress1(userUpdate.getAddress1());
			userOld.setAddress2(userUpdate.getAddress2());
			userOld.setCountry(userUpdate.getCountry());
			userOld.setState(userUpdate.getState());
			userOld.setCity(userUpdate.getCity());
			userOld.setPinCode(userUpdate.getPinCode());
			
			userDao.updateUser(userOld);
		}

	}

	@Override
	public void deleteUser(Long id) {
		userDao.deleteUser(id);
	}

	@Override
	public User getUserByEmail(String email) {
		User user = userDao.getUserByEmail(email);
		return user;
	}



}
