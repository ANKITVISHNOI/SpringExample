package com.avssoftsol.dao.login;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.transaction.annotation.Transactional;

import com.avssoftsol.entity.product.Product;

@Transactional
public class LoginDaoImpl implements LoginDao{

	private SessionFactory sessionFactory ;

	public LoginDaoImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void saveProduct(Product product) {
		Session session = null;
		Transaction tx = null;
		try {
			session = sessionFactory.getCurrentSession();	
			//			tx = session.beginTransaction();
			session.save(product);
			//			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			//			if (tx != null) {
			//				tx.rollback();
			//			}
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Product> getProductList() {
		Session session = null;
		List<Product> productList = null;
		try {
			session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(Product.class);
			productList = criteria.list();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return productList;
	}

	@Override
	public Product getProductById(Long id) {
		Session session = null;
		Product product = null;
		try {
			session = sessionFactory.getCurrentSession();
			product =  (Product) session.get(Product.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return product;
	}

	@Override
	public void updateProduct(Product productOld) {
		Session session = null;
		//		Transaction tx = null;
		try {
			session = sessionFactory.getCurrentSession();	
			//			tx = session.beginTransaction();
			session.update(productOld);
			//			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			//			if (tx != null) {
			//				tx.rollback();
			//			}
		}
	}

	@Override
	public void deleteProduct(Long id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = sessionFactory.getCurrentSession();	
			//			tx = session.beginTransaction();
			Product product = (Product) session.get(Product.class, id);
			if (product != null) {
				session.delete(product);
			}
			//			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			//			if (tx != null) {
			//				tx.rollback();
			//			}
		}
	}

}
