package org.abacus.academy.dto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class MessageService {

	public Map<String, Object> sendMessage(int status, String msg){
		Map<String, Object> mp = new HashMap<String, Object>();
		mp.put("status", status);
		mp.put("message", msg);
		return mp;
	}
}
