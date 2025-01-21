import { ReactElement } from 'react';
import { Detail } from "@project-gauntlet/api/components";
import { Environment } from "@project-gauntlet/api/helpers";

export default function TemplateView(): ReactElement {
    return (
        <Detail>
            <Detail.Content>
                <Detail.Content.Paragraph>
                    Hello Gauntlet!
                </Detail.Content.Paragraph>
                <Detail.Content.Paragraph>
                    Gauntlet Version: {Environment.gauntletVersion}
                </Detail.Content.Paragraph>
            </Detail.Content>
        </Detail>
    );
};

