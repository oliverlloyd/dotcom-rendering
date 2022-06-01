const textCardHeadline = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#ffffff';
		case 'LongRunningAltPalette':
			return '#121212';
		case 'SombrePalette':
			return '#ffffff';
		case 'SombreAltPalette':
			return '#ffffff';
		case 'InvestigationPalette':
			return '#ffffff';
		case 'BreakingPalette':
			return '#ffffff';
		case 'EventPalette':
			return '#041F4A';
		case 'EventAltPalette':
			return '#041F4A';
	}
};

const textCardStandfirst = textCardHeadline;
const textCardFooter = textCardHeadline;

const textCardKicker = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#ff9081';
		case 'LongRunningAltPalette':
			return '#8b0000';
		case 'SombrePalette':
			return '#c1d8fc';
		case 'SombreAltPalette':
			return '#ff5943';
		case 'InvestigationPalette':
			return '#ffe500';
		case 'BreakingPalette':
			return '#ffbac8';
		case 'EventPalette':
			return '#c70000';
		case 'EventAltPalette':
			return '#e2352d';
	}
};

const textCardByline = textCardKicker;

const textCardCommentCount = (
	containerPalette: DCRContainerPalette,
): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#DCDCDC';
		case 'LongRunningAltPalette':
			return '#707070';
		case 'SombrePalette':
			return '#dcdcdc';
		case 'SombreAltPalette':
			return '#999999';
		case 'InvestigationPalette':
			return '#dcdcdc';
		case 'BreakingPalette':
			return '#dcdcdc';
		case 'EventPalette':
			return '#707070';
		case 'EventAltPalette':
			return '#333333';
	}
};

const textDynamoHeadline = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#052962';
		case 'LongRunningAltPalette':
			return '#121212';
		case 'SombrePalette':
			return '#ffffff';
		case 'SombreAltPalette':
			return '#ffffff';
		case 'InvestigationPalette':
			return '#ffffff';
		case 'BreakingPalette':
			return '#121212';
		case 'EventPalette':
			return '#041F4A';
		case 'EventAltPalette':
			return '#041F4A';
	}
};

const textDynamoKicker = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#c70000';
		case 'LongRunningAltPalette':
			return '#8b0000';
		case 'SombrePalette':
			return '#c1d8fc';
		case 'SombreAltPalette':
			return '#ff5943';
		case 'InvestigationPalette':
			return '#ffe500';
		case 'BreakingPalette':
			return '#8b0000';
		case 'EventPalette':
			return '#c70000';
		case 'EventAltPalette':
			return '#c70000';
	}
};

const textDynamoSublinkKicker = (
	containerPalette: DCRContainerPalette,
): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#ff9081';
		case 'LongRunningAltPalette':
			return '#8b0000';
		case 'SombrePalette':
			return '#c1d8fc';
		case 'SombreAltPalette':
			return '#ff5943';
		case 'InvestigationPalette':
			return '#ffe500';
		case 'BreakingPalette':
			return '#8b0000';
		case 'EventPalette':
			return '#c70000';
		case 'EventAltPalette':
			return '#c70000';
	}
};

const textDynamoMeta = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#052962';
		case 'LongRunningAltPalette':
			return '#dcdcdc';
		case 'SombrePalette':
			return '#3f464a';
		case 'SombreAltPalette':
			return '#222527';
		case 'InvestigationPalette':
			return '#3f464a';
		case 'BreakingPalette':
			return '#8b0000';
		case 'EventPalette':
			return '#ededed';
		case 'EventAltPalette':
			return '#ededed';
	}
};

const textContainer = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#052962';
		case 'LongRunningAltPalette':
			return '#121212';
		case 'SombrePalette':
			return '#ffffff';
		case 'SombreAltPalette':
			return '#ffffff';
		case 'InvestigationPalette':
			return '#ffffff';
		case 'BreakingPalette':
			return '#121212';
		case 'EventPalette':
			return '#041F4A';
		case 'EventAltPalette':
			return '#041f4a';
	}
};

const textContainerToggle = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#333333';
		case 'LongRunningAltPalette':
			return '#333333';
		case 'SombrePalette':
			return '#dcdcdc';
		case 'SombreAltPalette':
			return '#dcdcdc';
		case 'InvestigationPalette':
			return '#f6f6f6';
		case 'BreakingPalette':
			return '#707070';
		case 'EventPalette':
			return '#707070';
		case 'EventAltPalette':
			return '#707070';
	}
};

const borderContainer = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return 'rgba(0,0,0, 0.2)';
		case 'LongRunningAltPalette':
			return 'rgba(0,0,0, 0.2)';
		case 'SombrePalette':
			return 'rgba(255,255,255, 0.2)';
		case 'SombreAltPalette':
			return 'rgba(255,255,255, 0.2)';
		case 'InvestigationPalette':
			return 'rgba(255,255,255, 0.2)';
		case 'BreakingPalette':
			return 'rgba(0,0,0, 0.2)';
		case 'EventPalette':
			return 'rgba(0,0,0, 0.2)';
		case 'EventAltPalette':
			return 'rgba(0,0,0, 0.2)';
	}
};

const borderLines = textCardHeadline;

const backgroundContainer = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#e4e5e8';
		case 'LongRunningAltPalette':
			return '#f2f2f2';
		case 'SombrePalette':
			return '#595c5f';
		case 'SombreAltPalette':
			return '#3f464a';
		case 'InvestigationPalette':
			return '#595c5f';
		case 'BreakingPalette':
			return '#ffffff';
		case 'EventPalette':
			return '#f1f8fc';
		case 'EventAltPalette':
			return '#fbf6ef';
	}
};

const backgroundCard = (containerPalette: DCRContainerPalette): string => {
	switch (containerPalette) {
		case 'LongRunningPalette':
			return '#052962';
		case 'LongRunningAltPalette':
			return '#dcdcdc';
		case 'SombrePalette':
			return '#3f464a';
		case 'SombreAltPalette':
			return '#222527';
		case 'InvestigationPalette':
			return '#3f464a';
		case 'BreakingPalette':
			return '#8b0000';
		case 'EventPalette':
			return '#ededed';
		case 'EventAltPalette':
			return '#efe8dd';
	}
};

const topBarCard = textCardKicker;

/**
 * When a container is given a special `containerPalette` then this function decides the override colours to be used
 * for it and its cards
 *
 * @see {@link https://github.com/guardian/interactive-atom-container-colours/blob/master/shared/css/_variables.scss Frontend code}
 * @param {DCRContainerPalette} containerPalette
 * @returns {ContainerOverrides} an object with the overrides set as properties
 */
export const decideContainerOverrides = (
	containerPalette: DCRContainerPalette,
): ContainerOverrides => {
	return {
		text: {
			cardHeadline: textCardHeadline(containerPalette),
			cardStandfirst: textCardStandfirst(containerPalette),
			cardKicker: textCardKicker(containerPalette),
			cardByline: textCardByline(containerPalette),
			cardFooter: textCardFooter(containerPalette),
			cardCommentCount: textCardCommentCount(containerPalette),
			dynamoHeadline: textDynamoHeadline(containerPalette),
			dynamoKicker: textDynamoKicker(containerPalette),
			dynamoSublinkKicker: textDynamoSublinkKicker(containerPalette),
			dynamoMeta: textDynamoMeta(containerPalette),
			container: textContainer(containerPalette),
			containerToggle: textContainerToggle(containerPalette),
		},
		border: {
			container: borderContainer(containerPalette),
			lines: borderLines(containerPalette),
		},
		background: {
			container: backgroundContainer(containerPalette),
			card: backgroundCard(containerPalette),
		},
		topBar: {
			card: topBarCard(containerPalette),
		},
	};
};
