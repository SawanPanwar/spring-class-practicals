package com.rays.common;

import org.springframework.beans.factory.annotation.Autowired;

public class BaseServiceImpl<T extends BaseDTO, D extends BaseDAOInt<T>> implements BaseServiceInt<T> {

	@Autowired
	public D dao;
}