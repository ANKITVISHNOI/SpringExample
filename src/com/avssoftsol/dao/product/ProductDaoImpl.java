package com.avssoftsol.dao.product;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.transaction.annotation.Transactional;

import com.avssoftsol.app.util.HibernateUtil;
import com.avssoftsol.entity.product.Product;


@Transactional
public class ProductDaoImpl implements ProductDao{


	@Override
	public void saveProduct(Product product) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			session.save(product);
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
	public List<Product> getProductList() {
		Session session = null;
		List<Product> productList = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(Product.class);
			productList = criteria.list();

		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return productList;
	}

	@Override
	public Product getProductById(Long id) {
		Session session = null;
		Product product = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			product =  (Product) session.get(Product.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return product;
	}

	@Override
	public void updateProduct(Product productOld) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();	
			tx = session.beginTransaction();
			session.update(productOld);
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
	public void deleteProduct(Long id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();	
			tx = session.beginTransaction();
			Product product = new Product();
			product.setId(id);
				session.delete(product);
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

}
