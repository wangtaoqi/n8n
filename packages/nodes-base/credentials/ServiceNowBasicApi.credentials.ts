import {
	IAuthenticateBasicAuth,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class ServiceNowBasicApi implements ICredentialType {
	name = 'serviceNowBasicApi';
	extends = [
		'httpBasicAuth'
	];
	displayName = 'ServiceNow Basic Auth API';
	documentationUrl = 'serviceNow';
	properties: INodeProperties[] = [
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
			hint: 'The subdomain can be extracted from the URL. If the URL is: https://dev99890.service-now.com the subdomain is dev99890',
			required: true,
		},
	];
	authenticate: IAuthenticateBasicAuth = {
		type: 'basicAuth',
		properties: {},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://{{$credentials?.subdomain}}.service-now.com',
			url: '/api/now/table/sys_user_role',
		}
	}
}
