package com.avssoftsol.dao.product;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
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

			//Object[] myArray = productList.toArray();
			HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
			HSSFSheet hssfSheet = hssfWorkbook.createSheet("Excel");
			
			HSSFRow hssfRowHead = hssfSheet.createRow((short) 0);
			hssfRowHead.createCell((short) 0).setCellValue("Id");
			hssfRowHead.createCell((short) 1).setCellValue("Name");
			hssfRowHead.createCell((short) 2).setCellValue("Code");
			hssfRowHead.createCell((short) 3).setCellValue("Qty");
			hssfRowHead.createCell((short) 3).setCellValue("Price");
			
			
			int rownum = 0;
	         for (Product product : productList)
	            {
	            HSSFRow row = hssfSheet.createRow(rownum++);
	            createList(product, row); 
	            
	             System.out.println("Ankut mshfouh");   
	        }    
	        
	         FileOutputStream out = new FileOutputStream(new File("E://opt/NewFile.xls")); // file name with path
	            hssfWorkbook.write(out);
	            hssfWorkbook.close();
	            out.close(); 
	            
			System.out.print("file created");


		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}

		return productList;
	}


	private void createList(Product product, HSSFRow row) {
		Cell cell = row.createCell(0);
        cell.setCellValue(product.getId());
     
        cell = row.createCell(1);
        cell.setCellValue(product.getName());
        
        cell = row.createCell(2);
        cell.setCellValue(product.getCode());
		
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
