package com.avssoftsol.dao.user;

import java.util.List;

import com.avssoftsol.entity.user.User;


public interface UserDao {

	public void saveUser(User user); 

	public List<User> getUserList();

	public User getUserById(Long id);

	public void updateUser(User userOld);

	public void deleteUser(Long id);

	public User getUserByEmail(String email);  
 
}
