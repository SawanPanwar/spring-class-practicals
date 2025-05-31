package com.rays.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.UserDTO;

public class UserDAOImpl extends BaseDAOImpl<UserDTO> implements UserDAOInt {

	public Class<UserDTO> getDTOClass() {
		return UserDTO.class;
	}

	protected List<Predicate> getWhereClause(UserDTO dto, CriteriaBuilder builder, Root<UserDTO> qRoot) {
		return null;
	}

}
