package login_test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class selenium {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Tsegts-ErdeneGantulg\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver d = new ChromeDriver();
			d.get("http://localhost");
			d.findElement(By.id("username")).sendKeys("bob@gmail.com");
			d.findElement(By.id("password")).sendKeys("bobPass");
			d.findElement(By.className("login-btn")).click();
			String u = d.getCurrentUrl();
			if(u.equals("http://localhost/home")) {
				System.out.println("Test case passed");
				
			}
			else {
				System.out.println("Test case failed");
			}

	}

}
