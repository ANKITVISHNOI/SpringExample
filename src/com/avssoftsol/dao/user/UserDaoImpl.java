package com.avssoftsol.dao.user;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.avssoftsol.app.util.HibernateUtil;
import com.avssoftsol.entity.user.User;

@Transactional
public class UserDaoImpl implements UserDao{

	@Override
	public void saveUser(User user) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			session.save(user);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (tx != null) {
				tx.rollback();
			}
		}
		finally{
			session.close();
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> getUserList() {
		Session session = null;
		List<User> userList = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(User.class);
			userList = criteria.list();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return userList;
	}

	@Override
	public User getUserById(Long id) {
		User user = null;
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			user = (User) session.get(User.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return user;
	}
	
	@Override
	public User getUserByEmail(String email) {
		User user = null;
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria cr = session.createCriteria(User.class);
			cr.add(Restrictions.eq("email", email));
			user = (User) cr.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return user;
	}

	@Override
	public void updateUser(User userOld) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			session.update(userOld);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (tx != null) {
				tx.rollback();
			}
		}
		finally{
			session.close();
		}
		
	}

	@Override
	public void deleteUser(Long id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			User user = new User();
			user.setId(id);
			session.delete(user);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (tx != null){
				tx.rollback();
			}
		}
		finally{
			session.close();
		}
		
	}

	
}
