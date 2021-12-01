import { CfnInclude } from '@aws-cdk/cloudformation-include';
import { App } from '@aws-cdk/core';
import { AccessScope, GuEc2App } from '@guardian/cdk';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack, GuStageParameter } from '@guardian/cdk/lib/constructs/core';
import { join } from 'path';
import { InstanceClass, InstanceSize, InstanceType, Peer, Port } from "@aws-cdk/aws-ec2";
import { Stage } from "@guardian/cdk/lib/constants";

export class MobileAppsRendering extends GuStack {
	constructor(scope: App, id: string, props: GuStackProps) {
		super(scope, id, props);
		const yamlTemplateFilePath = join(
			__dirname,
			'../..',
			'config/cloudformation.yaml',
		);
		new CfnInclude(this, 'YamlTemplate', {
			templateFile: yamlTemplateFilePath,
			parameters: {
				Stage: GuStageParameter.getInstance(this),
			},
		});
    new GuEc2App(this, {
      applicationPort: 1234,
      app: "app-name",
      access: { scope: AccessScope.PUBLIC },
      instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MEDIUM),
      certificateProps:{
        [Stage.CODE]: {
          domainName: "code-guardian.com",
          hostedZoneId: "id123",
        },
        [Stage.PROD]: {
          domainName: "prod-guardian.com",
          hostedZoneId: "id124",
        },
      },
      monitoringConfiguration: {
        snsTopicName: "alerts-topic-for-my-team",
        http5xxAlarm: {
          tolerated5xxPercentage: 1,
        },
        unhealthyInstancesAlarm: true,
      },
      userData: {
        distributable: {
          fileName: "app-name.deb",
          executionStatement: `dpkg -i /app-name/app-name.deb`,
        }
      },
    });
	}
}
