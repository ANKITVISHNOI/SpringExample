package com.avssoftsol.dao.otplog;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.transaction.annotation.Transactional;

import com.avssoftsol.app.util.HibernateUtil;
import com.avssoftsol.entity.otplog.OTPLog;


@Transactional
public class OTPLogDaoImpl implements OTPLogDao{


	@Override
	public boolean addOTPLog(OTPLog otpLog) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			session.save(otpLog);
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
		return true;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<OTPLog> getOTPLogList() {
		Session session = null;
		List<OTPLog> productList = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(OTPLog.class);
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
	public OTPLog getOTPLogById(long id) {
		Session session = null;
		OTPLog otpLog = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			otpLog =  (OTPLog) session.get(OTPLog.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return otpLog;
	}

	/*@Override
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
	}*/

	@Override
	public boolean deleteOTPLog(long id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();	
			tx = session.beginTransaction();
			OTPLog otpLog = new OTPLog();
			otpLog.setId(id);
				session.delete(otpLog);
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
		return true;
	}

}
