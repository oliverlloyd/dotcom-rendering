import { css, Global } from '@emotion/react';
import { ArticleDisplay, ArticleSpecial } from '@guardian/libs';
import { until, visuallyHidden } from '@guardian/source-foundations';
import { clearFix } from '../../lib/mixins';
import type { NavType } from '../../model/extract-nav';
import type { EditionId } from '../../lib/edition';
import { GuardianRoundel } from '../GuardianRoundel';
import { InteractiveSupportButton } from '../InteractiveSupportButton.importable';
import { Island } from '../Island';
import { Pillars } from '../Pillars';
import { navInputCheckboxId, showMoreButtonId, veggieBurgerId } from './config';
import { ExpandedMenu } from './ExpandedMenu/ExpandedMenu';

type Props = {
	format: ArticleFormat;
	nav: NavType;
	subscribeUrl: string;
	editionId: EditionId;
	isInEuropeTest: boolean;
	headerTopBarSwitch: boolean;
};

const clearFixStyle = css`
	${clearFix};
`;

const rowStyles = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const minNavHeight = css`
	min-height: 48px;
`;

const PositionRoundel = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			margin-top: 3px;
			z-index: 2;

			${until.desktop} {
				margin-right: 51px;
			}

			margin-right: 24px;
		`}
	>
		{children}
	</div>
);

export const Nav = ({
	format,
	nav,
	subscribeUrl,
	editionId,
	headerTopBarSwitch,
	isInEuropeTest,
}: Props) => {
	const displayRoundel =
		format.display === ArticleDisplay.Immersive ||
		format.theme === ArticleSpecial.Labs;

	return (
		<div css={rowStyles}>
			<Global
				styles={css`
					/* We apply this style when the side navigation is open the prevent the document body from scrolling */
					/* See Nav.tsx */
					.nav-is-open {
						${until.desktop} {
							overflow: hidden;
						}
					}
				`}
			/>
			{/*
                IMPORTANT NOTE: Supporting NoJS and accessibility is hard.

                We therefore use JS to make the Nav elements more accessible. We add a
                keydown `addEventListener` to both the veggie burger button and the show
                more menu buttons. We also listen to escape key presses to close the Nav menu.
                We also toggle the tabindex of clickable items to make sure that even when we
                are displaying the menu on mobile and tablet, that it doesnt get highlighted
                when tabbing though the page.
                This is not a perfect solution as not all screen readers support JS
                https://webaim.org/projects/screenreadersurvey8/#javascript
            */}
			<script
				dangerouslySetInnerHTML={{
					__html: `document.addEventListener('DOMContentLoaded', function(){
                        // Used to toggle data-link-name on label buttons
                        var navInputCheckbox = document.getElementById('${navInputCheckboxId}')
                        var showMoreButton = document.getElementById('${showMoreButtonId}')
                        var veggieBurger = document.getElementById('${veggieBurgerId}')
                        var expandedMenuClickableTags = document.querySelectorAll('.selectableMenuItem')
                        var expandedMenu = document.getElementById('expanded-menu-root')

                        // We assume News is the 1st column
                        var firstColLabel = document.getElementById('News-button')
                        var firstColLink = document.querySelectorAll('#newsLinks > li:nth-of-type(2) > a')[0]

                        var focusOnFirstNavElement = function(){
                          // need to focus on first element in list, firstColLabel is not viewable on desktop
                          if(window.getComputedStyle(firstColLabel).display === 'none'){
                            firstColLink.focus()
                          } else {
                            firstColLabel.focus()
                          }
                        }

						if (!navInputCheckbox) return; // Sticky nav replaces the nav so element no longer exists for users in test.

                        navInputCheckbox.addEventListener('click',function(){
                          document.body.classList.toggle('nav-is-open')

                          if(!navInputCheckbox.checked) {
							firstColLabel.setAttribute('aria-expanded', 'false')
                            showMoreButton.setAttribute('data-link-name','nav2 : veggie-burger: show')
                            veggieBurger.setAttribute('data-link-name','nav2 : veggie-burger: show')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','-1')
                            })
                          } else {
							firstColLabel.setAttribute('aria-expanded', 'true')
                            showMoreButton.setAttribute('data-link-name','nav2 : veggie-burger: hide')
                            veggieBurger.setAttribute('data-link-name','nav2 : veggie-burger: hide')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','0')
                            })
                            focusOnFirstNavElement()
                          }
                        })
                        var toggleMainMenu = function(e){
                          navInputCheckbox.click()
                        }
                        // Close hide menu on press enter
                        var keydownToggleMainMenu = function(e){
                          // keyCode: 13 => Enter key | keyCode: 32 => Space key
                          if (e.keyCode === 13 || e.keyCode === 32) {
                            e.preventDefault()
                            toggleMainMenu()
                          }
                        }
                        showMoreButton.addEventListener('keydown', keydownToggleMainMenu)
                        veggieBurger.addEventListener('keydown', keydownToggleMainMenu)
                        // Accessibility to hide Nav when pressing escape key
                        document.addEventListener('keydown', function(e){
                          // keyCode: 27 => esc
                          if (e.keyCode === 27) {
                            if(navInputCheckbox.checked) {
                              toggleMainMenu()
                              if(window.getComputedStyle(veggieBurger).display === 'none'){
                                showMoreButton.focus()
                              }else{
                                veggieBurger.focus()
                              }
                            }
                          }
                        })
                        // onBlur close dialog
                        document.addEventListener('mousedown', function(e){
                          if(navInputCheckbox.checked && !expandedMenu.contains(e.target)){
                            toggleMainMenu()
                          }
                        });
                      })`,
				}}
			/>
			<div
				css={[
					clearFixStyle,
					rowStyles,
					format.display === ArticleDisplay.Immersive && minNavHeight,
				]}
				data-component="nav2"
			>
				{format.display === ArticleDisplay.Immersive && (
					<Island deferUntil="visible" clientOnly={true}>
						<InteractiveSupportButton
							editionId={editionId}
							subscribeUrl={subscribeUrl}
						/>
					</Island>
				)}
				{/*
                IMPORTANT NOTE:
                It is important to have the input as the 1st sibling for NoJS to work
                as we use ~ to apply certain styles on checkbox checked and ~ can only
                apply to styles with elements that are preceded
            */}
				<input
					type="checkbox"
					css={css`
						${visuallyHidden};
					`}
					id={navInputCheckboxId}
					name="more"
					tabIndex={-1}
					key="OpenExpandedMenuCheckbox"
					aria-hidden="true"
					role="button"
					aria-expanded="false"
					aria-haspopup="true"
				/>
				<Pillars
					display={format.display}
					pillars={nav.pillars}
					pillar={format.theme}
					dataLinkName="nav2"
					isTopNav={true}
				/>
				<ExpandedMenu
					editionId={editionId}
					nav={nav}
					format={format}
					headerTopBarSwitch={headerTopBarSwitch}
					isInEuropeTest={isInEuropeTest}
				/>
			</div>
			{displayRoundel && (
				<PositionRoundel>
					<GuardianRoundel />
				</PositionRoundel>
			)}
		</div>
	);
};
